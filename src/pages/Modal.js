import React, { useState } from 'react';
import './modal.css';
import axios from 'axios';
import icon from './uploadicon.png';

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


  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleTitleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 275) {
      setIdeaTitle(inputValue);
      const remainingChars = 275 - inputValue.length;
      setTitleCharCount(remainingChars);
    }
  };

  const handleDescriptionChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 275) {
      setIdeaDescription(inputValue);
      const remainingChars = 275 - inputValue.length;
      setDescriptionCharCount(remainingChars);
    }
  };

  const handleBenefitsChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 275) {
      setPotentialBenefits(inputValue);
      const remainingChars = 275 - inputValue.length;
      setBenefitsCharCount(remainingChars);
    }
  };

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setUploadedFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server)
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
          const progress = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
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

  return (
    <div className="App">
      <button onClick={togglePopup}>Add idea</button>
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
                  onChange={handleTitleChange}
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
                  onChange={handleDescriptionChange}
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
                  onChange={handleBenefitsChange}
                />
                <span className="char-count">
                  {benefitsCharCount} {benefitsCharCount === 1 ? 'character left' : 'characters left'}
                </span>
              </div>
              <div className="form-group">
                <label htmlFor="department">What department/division would your idea serve:</label>
                <select
                  id="department"
                  name="department"
                  value={selectedDepartment}
                  onChange={handleDepartmentChange}
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
      <img src={icon} alt="Upload Icon" width="48" height="48" /> {/* Use the imported image variable */}
      <span className="upload-text" style={{ color: '#0086C9' }}>
        Click to upload or drag and drop <br></br>SVG, PNG, JPG, or GIF (max. 800x400px)
      </span>
      <input
        type="file"
        id="attachment"
        name="attachment"
        accept=".svg, .png, .jpg, .gif"
        onChange={handleFileUpload}
        style={{ display: 'none' }}
      />
      <button className="upload-button" onClick={handleUpload}>
    
  </button>
  <div className="upload-progress">
    {uploadedFile && <p>Selected file: {uploadedFile.name}</p>}
   </div>
      
    </label>
  </div>
</div>

<div className="form-group">
  <div className="toggle-switch">
    <input type="checkbox" id="anonymous" name="anonymous" />
    <label htmlFor="anonymous">Anonymous</label>
  </div>
  <p className="toggle-description">
    By clicking this, your idea will be submitted anonymously.
  </p>
</div>

<div className="button-container">
<button
      className="cancel-button"
      style={{
        backgroundColor: '#ccc',   /* Gray background */
        color: '#333',             /* Text color */
        border: 'none',
        padding: '0 20px',         /* Adjust padding for button size */
        borderRadius: '3px',       /* Set border radius to 3px */
        cursor: 'pointer',
        marginRight: '10px',       /* Add margin between buttons */
        outline: 'none',            /* Remove button outline on focus */
        height: '30px',            /* Set button height */
        display: 'flex',
        alignItems: 'center',      /* Center text vertically */
        fontFamily: 'Inter, sans-serif', /* Use the Inter font */
        fontSize: '12px', 
        justifyContent: 'center'   /* Center text horizontally */
      }}
    >
      Cancel
    </button>
    <button
      className="submit-button"
      style={{
        backgroundColor: '#0086C9', /* Blue background */
        color: '#fff',             /* Text color */
        border: 'none',
        padding: '0 20px',         /* Adjust padding for button size */
        borderRadius: '3px',       /* Set border radius to 3px */
        cursor: 'pointer',
        outline: 'none',           /* Remove button outline on focus */
        fontFamily: 'Inter, sans-serif', /* Use the Inter font */
        fontSize: '12px',          /* Set font size to 12px */
        marginLeft: '10px',        /* Add margin between buttons */
        height: '30px',            /* Set button height */
        display: 'flex',
        alignItems: 'center',      /* Center text vertically */
        justifyContent: 'center'   /* Center text horizontally */
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
