import React, { useState, useEffect } from 'react';
import './modal.css';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { authentication } from 'src/pages/extentionsfunctions';

import icon from './uploadicon.png';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [accessToken, setAccessToken] = useState();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
    startdate: null,
    enddate: null,
  });

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

  const handleFormChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleUpload = async () => {
    if (!formData.image) {
      alert('Please select a file.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', formData.image);

      await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setUploadProgress(progress);
        },
      });

      console.log('File uploaded successfully');
      alert('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file. Please try again.');
    }
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Data to be submitted:', formData);

    try {
      // Make a POST request to the API
      const response = await fetch('https://developer.britam.com/api/IdeasPortal/CreateChallenge', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Idea challenge successfully');
        // Use React-Toastify for success message
        toast.success('Challenge Created Successfully! Thank you.');
        // Delay refresh after showing toast message
        setTimeout(() => {
          window.location.reload();
        }, 5000); // Refresh after 2 seconds (adjust the time as needed)
      } else {
        console.error('Failed to post idea to the API');
      }
    } catch (error) {
      console.error('Error while posting idea:', error);
    }
  };

  return (
    <div className="App" style={{ margin: '0', padding: '0' }}>
      <button
        onClick={togglePopup}
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
          fontSize: '14px',
          marginLeft: '0',
          height: '35px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '0',
        }}
      >
        + New Challenge
      </button>

      {showPopup && (
        <div className="popup">
          <div className="popup-header">Challenge Details</div>
          <div className="popup-content">
            <div className="form-container">
              <form onSubmit={handleSubmit} method="POST">
                <div className="form-group">
                  <label htmlFor="ideaTitle">Enter your challenge title:</label>
                  <input
                    type="text"
                    id="ideaTitle"
                    name="title"
                    placeholder="Idea title"
                    value={formData.title}
                    onChange={(e) => handleFormChange('title', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="ideaDescription">Give a description of challenge:</label>
                  <textarea
                    id="ideaDescription"
                    name="description"
                    placeholder="Challenge description"
                    value={formData.description}
                    onChange={(e) => handleFormChange('description', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="datePicker">Set time frame for idea submission:</label>
                  <div className="date-picker-container">
                    <div className="date-picker-field">
                      <label htmlFor="fromDate">From:</label>
                      <DatePicker
                        id="fromDate"
                        selected={fromDate}
                        onChange={(date) => handleFormChange('startdate', date)}
                        dateFormat="MM/dd/yyyy"
                      />
                    </div>
                    <div className="date-picker-field">
                      <label htmlFor="toDate">To:</label>
                      <DatePicker
                        id="toDate"
                        selected={toDate}
                        onChange={(date) => handleFormChange('enddate', date)}
                        dateFormat="MM/dd/yyyy"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="attachment">Upload Image?</label>
                  <div className="upload-frame">
                    <label htmlFor="attachment" className="upload-label">
                      <img src={icon} alt="Upload Icon" width="48" height="48" />
                      <span className="upload-text" style={{ color: '#0086C9' }}>
                        Click to upload or drag and drop <br />
                        SVG, PNG, JPG, or GIF (max. 800x400px)
                      </span>
                      <input
                        type="file"
                        id="attachment"
                        name="attachment"
                        accept=".svg, .png, .jpg, .gif"
                        onChange={handleFileUpload}
                        style={{ display: 'none' }}
                      />
                      <button className="upload-button" onClick={handleUpload} />
                      <div className="upload-progress">{uploadedFile && <p>Selected file: {uploadedFile.name}</p>}</div>
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
                    onClick={togglePopup}
                  >
                    Cancel
                  </button>

                  <button
                    className="submit-button"
                    type="submit"
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
