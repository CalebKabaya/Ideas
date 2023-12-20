import React, { useState, useEffect } from 'react';
import './modal.css';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { authentication } from 'src/pages/extentionsfunctions';
import { useUser } from '../hooks/UserContext'; // Import the useUser hook
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import icon from './uploadicon.png';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [ideaTitle, setIdeaTitle] = useState('');
  const [ideaDescription, setIdeaDescription] = useState('');
  const [potentialBenefits, setPotentialBenefits] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [titleCharCount, setTitleCharCount] = useState(275);
  const [descriptionCharCount, setDescriptionCharCount] = useState(275);
  const [potentialBenefitsCharCount, setPotentialBenefitsCharCount] = useState(275);

  const [benefitsCharCount, setBenefitsCharCount] = useState(275);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [accessToken, setAccessToken] = useState();
  const { userData, setUser } = useUser();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // Add alert state




  const { userId } = userData;

  const currentAccount = {
    userId: userId, // Use userName instead of {userName}

  };
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    potentialBenefits: '',
    // attachment: 'image.png',
    department: '',
    userId: currentAccount.userId,

  });
  console.log(currentAccount.userId)

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
  }, []);

  //   const handleFormChange = async (name, value, isTitleField) => {
  //     // Check if the name is 'image' and the value is a File object
  //     if (name === 'attachment' && value instanceof File) {
  //       setUploadedFile(value);
  //       setUploadProgress(0);

  //       try {
  //         const base64Data = await convertImageToBase64(value);
  //         // Update the formData with the base64 image data
  //         setFormData({
  //           ...formData,
  //           [name]: base64Data,
  //         });
  //       } catch (error) {
  //         console.error('Error converting image to Base64:', error);
  //         alert('Error converting image to Base64. Please try again.');
  //       }
  //     } else {
  //       // Handle other form field changes
  //       setFormData({
  //         ...formData,
  //         [name]: value,
  //       });

  //       if (isTitleField) {
  //         if (value.length <= 275) {
  //           setIdeaTitle(value);
  //           const remainingTitleChars = 275 - value.length;
  //           setTitleCharCount(remainingTitleChars);
  //         }
  //       } else {
  //         if (name === 'description' && value.length <= 275) {
  //           setIdeaDescription(value);
  //           const remainingDescriptionChars = 275 - value.length;
  //           setDescriptionCharCount(remainingDescriptionChars);
  //         }
  //       }

  //     }
  //   };

  const handleFormChange = async (name, value, isTitleField) => {
    if (name === 'attachment' && value instanceof File) {
      setUploadedFile(value);
      setUploadProgress(0);

      try {
        const base64Data = await convertImageToBase64(value);
        setFormData({
          ...formData,
          [name]: base64Data,
        });
      } catch (error) {
        console.error('Error converting image to Base64:', error);
        alert('Error converting image to Base64. Please try again.');
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });

      if (isTitleField) {
        if (value.length <= 300) {
          setIdeaTitle(value);
          const remainingTitleChars = 300 - value.length;
          setTitleCharCount(remainingTitleChars);
        }
      } else if (name === 'description' && value.length <= 300) {
        setIdeaDescription(value);
        const remainingDescriptionChars = 300 - value.length;
        setDescriptionCharCount(remainingDescriptionChars);
      } else if (name === 'potentialBenefits' && value.length <= 300) {
        setPotentialBenefits(value);
        const remainingPotentialBenefitsChars = 300 - value.length;
        setPotentialBenefitsCharCount(remainingPotentialBenefitsChars);
      } else if (name === 'department') {
        setSelectedDepartment(department);
      }
    }
  };

  // const handleFileUpload = (e) => {
  //   const file = e.target.files[0];
  //   setFormData({
  //     ...formData,
  //     image: file,
  //   });
  // };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Data to be submitted:', formData);

    try {
      // Make a POST request to the API
      const response = await fetch('https://developer.britam.com/api/IdeasPortal/CreateIdea', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('challenge posted successfully', response);

        // Use React-Toastify for success message
        toast.success('Idea submitted successfully! Thank you.');

        // After successful submission, close the popup
        togglePopup();

        // // Delay refresh after showing toast message
        // setTimeout(() => {
        //   window.location.reload();
        // }, 5000); // Refresh after 2 seconds (adjust the time as needed)

      } else {
        console.error('Failed to post challenge to the API');
        // Use React-Toastify for error message
        toast.error('Failed to post idea. Please try again.');
      }
    } catch (error) {
      console.error('Error while posting idea:', error);
      // / Use React-Toastify for error message
      toast.error('Error while posting idea. Please try again.');
    }
  };

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

  // Function to convert an image to Base64
  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  };

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
          marginLeft: '0px' /* Add margin between buttons */,
          height: '35px' /* Set button height */,
          display: 'flex',
          alignItems: 'center' /* Center text vertically */,
          justifyContent: 'center' /* Center text horizontally */,
          marginBottom: '0',
          // marginTop: '45px',
          whiteSpace: 'nowrap',
        }}
      >
        + Add Idea
      </button>

      {showPopup && (
        <div className="popup">
          <div className="popup-header">Idea  Details</div>
          <div className="popup-content">
            <div className="form-container">
              <form onSubmit={handleSubmit} method="POST">
                <div className="form-group">
                  <label htmlFor="ideaTitle">Enter your idea title:</label>
                  <input
                    type="text"
                    id="ideaTitle"
                    name="title"
                    placeholder="Idea title"
                    value={formData.title}
                    onChange={(e) => handleFormChange('title', e.target.value, true)}
                  />
                  <span className="char-count">
                    {titleCharCount} {titleCharCount === 1 ? 'character left' : 'characters left'}
                  </span>
                </div>

                <div className="form-group">
                  <label htmlFor="ideaDescription">Give a description of challenge:</label>
                  <textarea
                    id="ideaDescription"
                    name="description"
                    placeholder="Challenge description"
                    value={formData.description}
                    onChange={(e) => handleFormChange('description', e.target.value, false)}
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
                    placeholder="potential benefits"
                    value={formData.potentialBenefits}
                    onChange={(e) => handleFormChange('potentialBenefits', e.target.value, false)}
                  />
                  <span className="char-count">
                    {potentialBenefitsCharCount}{' '}
                    {potentialBenefitsCharCount === 1 ? 'character left' : 'characters left'}
                  </span>
                </div>

                <div className="form-group">
                  <label htmlFor="department">What department/division would your idea serve:</label>

                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    // onChange={handleDepartmentChange}
                    onChange={(e) => handleFormChange('department', e.target.value, false)}
                  >
                    <option value="">Select Department</option>
                    <option value="P&D">P&D</option>
                    <option value="Asset management">Asset Management</option>
                    <option value="Sales">Sales</option>
                    <option value="Customer support">Customer Support</option>
                    <option value="Human resources">Human Resources</option>
                  </select>
                </div>

                {/* <div className="form-group">
                  <label htmlFor="attachment">Any Attachment?</label>
                  <div className="upload-frame">
                    <label htmlFor="attachment" className="upload-label">
                      <img src={icon} alt="Upload Icon" width="48" height="48" />{' '}
                      <span className="upload-text" style={{ color: '#0086C9' }}>
                        Click to upload or drag and drop <br />
                        SVG, PNG, JPG, or GIF (max. 800x400px)
                      </span>
                      <input
                        type="file"
                        id="image"
                        name="image"
                        accept=".svg, .png, .jpg, .gif"
                        onChange={(e) => handleFormChange('image', e.target.value, true)}
                        style={{ display: 'none' }}
                      />
                      <button className="upload-button" onClick={handleUpload} />
                      <div className="upload-progress">{uploadedFile && <p>Selected file: {uploadedFile.name}</p>}</div>
                    </label>
                  </div>
                </div> */}

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

      {/* the ToastContainer  */}
      <ToastContainer />
    </div>
  );
}

export default App;
