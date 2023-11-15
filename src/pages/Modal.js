import React, { useState, useEffect } from 'react';
import './modal.css';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import icon from './uploadicon.png';
import { authentication } from 'src/pages/extentionsfunctions';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [showPopup, setShowPopup] = useState(false);
  const [ideaTitle, setIdeaTitle] = useState('');
  const [ideaDescription, setIdeaDescription] = useState('');
  const [potentialBenefits, setPotentialBenefits] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [titleCharCount, setTitleCharCount] = useState(275);
  const [descriptionCharCount, setDescriptionCharCount] = useState(275);
  const [benefitsCharCount, setBenefitsCharCount] = useState(275);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [accessToken, setAccessToken] = useState();
  const [challenges, setChallenges] = useState([]);
  const [message, setMessage] = useState(""); // Add message state

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    if (title.length <= 275) {
      setIdeaTitle(title);
      const remainingChars = 275 - title.length;
      setTitleCharCount(remainingChars);
    }
  };

  const handleDescriptionChange = (e) => {
    const description = e.target.value;
    if (description.length <= 275) {
      setIdeaDescription(description);
      const remainingChars = 275 - description.length;
      setDescriptionCharCount(remainingChars);
    }
  };

  const handleBenefitsChange = (e) => {
    const benefits = e.target.value;
    if (benefits.length <= 275) {
      setPotentialBenefits(benefits);
      const remainingChars = 275 - benefits.length;
      setBenefitsCharCount(remainingChars);
    }
  };

  const handleDepartmentChange = (e) => {
    const department = e.target.value;
    setSelectedDepartment(department);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setUploadedFile(file);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission here (e.g., send data to a server)
  // };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const userdata = {
  //     title: ideaTitle,
  //     description:ideaDescription,
  //     benefits: potentialBenefits,
  //     department:selectedDepartment,
  //     file:uploadedFile,
  //   };
  //   await axios
  //     .post(
  //       "https://developer.britam.com/api/IdeasPortal/CreateIdea",
  //       JSON.stringify(userdata)
  //     )
  //     .then((result) => {
  //       setMessage(result.data.msg);
  //       console.log(result.data);
  //       console.log(result.data.msg);
  //     });
  // };


  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!accessToken) {
      console.error("Access token is missing.");
      return;
    }

    const userdata = {
      title: ideaTitle,
      description: ideaDescription,
      benefits: potentialBenefits,
      department: selectedDepartment,
      file: uploadedFile,
    };

    try {
      const response = await axios.post(
        "https://developer.britam.com/api/IdeasPortal/CreateIdea",
        JSON.stringify(userdata),
        {
          headers: {
            Authorization: 'Bearer ' + accessToken.access_token,
            'Content-Type': 'application/json', // Set the content type
          },
        }
      );
      console.log("Response data:", response.data); // Log the entire response
      console.log("Response message:", response.data.msg); // Log the 'msg' propert
      setMessage(response.data.msg);
    } catch (error) {
      console.error('Error while posting idea:', error);
    }
  };

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const res = await authentication();
        setAccessToken(res);
      } catch (error) {
        console.error('Error while getting access token:', error);
      }
    };

    getAccessToken();
  }, []); // No dependencies, it should only run once


  if (accessToken === null) {
    return 'Loading';
  }

  const handleUpload = async () => {
    if (!uploadedFile) {
      alert('Please select a file.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', uploadedFile);

      await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setUploadProgress(progress); // Update the progress state
        },
      });

      console.log('File uploaded successfully');
      alert('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file. Please try again.');
    }
  };

  useEffect(() => {
    // Add the viewport meta tag dynamically when the component mounts
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0';
    document.head.appendChild(meta);

    // Clean up the added meta tag when the component unmounts
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  const department = "department";

  return (
    <div className="App" style={{ margin: '0', padding: '0' }}>
      <button
        onClick={togglePopup}
        className="submit-button"
        style={{
          backgroundColor: '#0086C9' /* Blue background */,
          color: '#fff' /* Text color */,
          border: 'none',
          padding: '0 20px' /* Adjust padding for button size */,
          borderRadius: '3px' /* Set border radius to 3px */,
          cursor: 'pointer',
          outline: 'none' /* Remove button outline on focus */,
          fontFamily: 'Inter, sans-serif' /* Use the Inter font */,
          fontSize: '14px' /* Set font size to 12px */,
          marginLeft: '10px' /* Add margin between buttons */,
          height: '35px' /* Set button height */,
          display: 'flex',
          alignItems: 'center' /* Center text vertically */,
          justifyContent: 'center' /* Center text horizontally */,
          marginBottom: '0',
        }}
      >
        + Add idea
      </button>

      {showPopup && (
        <div className="popup">
          <div className="popup-header">Idea Details</div>
          <div className="popup-content">
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="ideaTitle">Enter your idea title:</label>
                  <input
                    type="text"
                    id="ideaTitle"
                    name="ideaTitle"
                    placeholder="Idea title"
                    value={ideaTitle}
                    // onChange={handleTitleChange}
                    onChange={(e) => setIdeaTitle(e.target.value)}
                    required

                  />

                  <span className="char-count">
                    {titleCharCount} {titleCharCount === 1 ? 'character left' : 'characters left'}
                  </span>
                </div>
                <div className="form-group">
                  <label htmlFor="ideaDescription">Give a description of the idea:</label>
                  <textarea
                    id="ideaDescription"
                    name="ideaDescription"
                    placeholder="Idea description"
                    value={ideaDescription}
                    // onChange={handleDescriptionChange}
                    onChange={(e) => setIdeaDescription(e.target.value)}
                    required

                  />
                  <span className="char-count">
                    {descriptionCharCount} {descriptionCharCount === 1 ? 'character left' : 'characters left'}
                  </span>
                </div>
                <div className="form-group">
                  <label htmlFor="potentialBenefits">What are some of the potential benefits of your idea:</label>
                  <textarea
                    id="potentialBenefits"
                    name="potentialBenefits"
                    placeholder="Enter potential benefits"
                    value={potentialBenefits}
                    // onChange={handleBenefitsChange}
                    onChange={(e) => setPotentialBenefits(e.target.value)}
                    required

                  />
                  <span className="char-count">
                    {benefitsCharCount} {benefitsCharCount === 1 ? 'character left' : 'characters left'}
                  </span>
                </div>

                <div className="form-group">
                  
                  <label htmlFor={department}>What department/division would your idea serve:</label>

                  <select
                    id="department"
                    name="department"
                    value={selectedDepartment}
                    // onChange={handleDepartmentChange}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                  >
                    <option value="">Select Department</option>
                    <option value="P&D">P&D</option>
                    <option value="Asset management">Asset Management</option>
                    <option value="Sales">Sales</option>
                    <option value="Customer support">Customer Support</option>
                    <option value="Human resources">Human Resources</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="attachment">Any attachment?</label>
                  <div className="upload-frame">
                    <label htmlFor="attachment" className="upload-label">
                      <img src={icon} alt="Upload Icon" width="48" height="48" />{' '}
                      {/* Use the imported image variable */}
                      <span className="upload-text" style={{ color: '#0086C9' }}>
                        Click to upload or drag and drop <br />
                        SVG, PNG, JPG, or GIF (max. 800x400px)
                      </span>
                      <input
                        type="file"
                        id="attachment"
                        name="attachment"
                        accept=".svg, .png, .jpg, .gif"
                        // onChange={handleFileUpload}
                        onChange={(e) => setUploadedFile(e.target.value)}
                        style={{ display: 'none' }}
                      />
                      <button className="upload-button" onClick={handleUpload} />
                      <div className="upload-progress">{uploadedFile && <p>Selected file: {uploadedFile.name}</p>}</div>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <div className="toggle-switch">
                    <input type="checkbox" id="anonymous" name="anonymous" />
                    <label htmlFor="anonymous">Anonymous</label>
                  </div>
                  <p className="toggle-description">By clicking this, your idea will be submitted anonymously.</p>
                </div>

                <div className="button-container">
                  <button
                    className="cancel-button"
                    style={{
                      backgroundColor: '#ccc' /* Gray background */,
                      color: '#333' /* Text color */,
                      border: 'none',
                      padding: '0 20px' /* Adjust padding for button size */,
                      borderRadius: '3px' /* Set border radius to 3px */,
                      cursor: 'pointer',
                      marginRight: '10px' /* Add margin between buttons */,
                      outline: 'none' /* Remove button outline on focus */,
                      height: '30px' /* Set button height */,
                      display: 'flex',
                      alignItems: 'center' /* Center text vertically */,
                      fontFamily: 'Inter, sans-serif' /* Use the Inter font */,
                      fontSize: '12px',
                      justifyContent: 'center' /* Center text horizontally */,
                    }}
                    onClick={togglePopup}
                  >
                    Cancel
                  </button>
                  <button
                    className="submit-button"
                    type="submit"
                    style={{
                      backgroundColor: '#0086C9' /* Blue background */,
                      color: '#fff' /* Text color */,
                      border: 'none',
                      padding: '0 20px' /* Adjust padding for button size */,
                      borderRadius: '3px' /* Set border radius to 3px */,
                      cursor: 'pointer',
                      outline: 'none' /* Remove button outline on focus */,
                      fontFamily: 'Inter, sans-serif' /* Use the Inter font */,
                      fontSize: '12px' /* Set font size to 12px */,
                      marginLeft: '10px' /* Add margin between buttons */,
                      height: '30px' /* Set button height */,
                      display: 'flex',
                      alignItems: 'center' /* Center text vertically */,
                      justifyContent: 'center' /* Center text horizontally */,
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;