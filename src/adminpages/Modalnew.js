import React, { useState } from 'react';
import './modal.css';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import icon from './uploadicon.png';



function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [ideaTitle, setIdeaTitle] = useState('');
  const [ideaDescription, setIdeaDescription] = useState('');
  const [potentialBenefits, setPotentialBenefits] = useState('');
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server)
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setUploadedFile(file);
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
      <button onClick={togglePopup}>Add New Challenge</button>
      {showPopup && (
        <div className="popup">
          <div className="popup-header">Challenge Details</div>
          <div className="popup-content">
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="ideaTitle">Enter your challenge title:</label>
                  <input
                    type="text"
                    id="ideaTitle"
                    name="ideaTitle"
                    placeholder="Title.."
                    value={ideaTitle}
                    onChange={handleTitleChange}
                  />
                  <span className="char-count">
                    {titleCharCount}{' '}
                    {titleCharCount === 1 ? 'character left' : 'characters left'}
                  </span>
                </div>
                <div className="form-group">
                  <label htmlFor="ideaDescription">Give a description of challenge:</label>
                  <textarea
                    id="ideaDescription"
                    name="ideaDescription"
                    placeholder="Challenge description"
                    value={ideaDescription}
                    onChange={handleDescriptionChange}
                  />
                  <span className="char-count">
                    {descriptionCharCount}{' '}
                    {descriptionCharCount === 1 ? 'character left' : 'characters left'}
                  </span>
                </div>
                <div className="form-group">
                  <label htmlFor="datePicker">Set time frame for idea submission:</label>
                  <div className="date-picker-container">
                    <div className="date-picker-field">
                      <label htmlFor="fromDate">From:</label>
                      <DatePicker
                        id="fromDate"
                        selected={fromDate}
                        onChange={(date) => setFromDate(date)}
                        dateFormat="MM/dd/yyyy"
                      />
                    </div>
                    <div className="date-picker-field">
                      <label htmlFor="toDate">To:</label>
                      <DatePicker
                        id="toDate"
                        selected={toDate}
                        onChange={(date) => setToDate(date)}
                        dateFormat="MM/dd/yyyy"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="attachment">Upload image?</label>
                  <div className="upload-frame">
                    <label htmlFor="attachment" className="upload-label">
                      {uploadedFile ? (
                        <img
                          src={URL.createObjectURL(uploadedFile)} // Display the uploaded image
                          alt="Uploaded"
                          style={{ maxWidth: '300px', maxHeight: '200px' }} // Set max width and height
                        />
                      ) : (
                        <img src={icon} alt="Upload Icon" width="48" height="48" />
                      )}
                      <span className="upload-text" style={{ color: '#0086C9' }}>
                        Click to upload or drag and drop <br />SVG, PNG, JPG, or GIF (max. 800x400px)
                      </span>
                      <input
                        type="file"
                        id="attachment"
                        name="attachment"
                        accept=".svg, .png, .jpg, .gif"
                        onChange={handleFileUpload}
                        style={{ display: 'none' }}
                      />
                      <button className="upload-button" onClick={handleUpload}/>
                      <div className="upload-progress">
                        {uploadedFile && <p>Selected file: {uploadedFile.name}</p>}
                      </div>
                    </label>
                  </div>
                </div>
                <div className="button-container">
                  <button
                    className="cancel-button"
                    style={{
                      backgroundColor: '#ccc',
                      color: '#333',
                      border: 'none',
                      padding: '0 20px',
                      borderRadius: '3px',
                      cursor: 'pointer',
                      marginRight: '10px',
                      outline: 'none',
                      height: '30px',
                      display: 'flex',
                      alignItems: 'center',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '12px',
                      justifyContent: 'center',
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="submit-button"
                    style={{
                      backgroundColor: '#0086C9',
                      color: '#fff',
                      border: 'none',
                      padding: '0 20px',
                      borderRadius: '3px',
                      cursor: 'pointer',
                      outline: 'none',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '12px',
                      marginLeft: '10px',
                      height: '30px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
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
