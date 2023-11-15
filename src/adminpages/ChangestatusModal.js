import React, { useState, useEffect } from 'react';
import './ChangeStatusModal.css';
import { authentication } from 'src/pages/extentionsfunctions';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Modal() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App bg-black" style={{ margin: '0', padding: '0' }}>
      <button
        onClick={openModal}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            openModal();
          }
        }}
        onFocus={(e) => {
          e.target.style.backgroundColor = '#0086C9'; /* Change background color on focus */
          e.target.style.color = 'white'; /* Change text color on focus */
        }}
        onBlur={(e) => {
          e.target.style.backgroundColor = 'white'; /* Restore background color on blur */
          e.target.style.color = '#0086C9'; /* Restore text color on blur */
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#0086C9'; /* Change background color on hover */
          e.target.style.color = 'white'; /* Change text color on hover */
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = 'white'; /* Restore background color on mouse out */
          e.target.style.color = '#0086C9'; /* Restore text color on mouse out */
        }}
        style={{
          backgroundColor: 'white' /* Initial background color */,
          color: '#0086C9' /* Initial text color */,
          border: '2px solid #0086C9' /* Border color and width */,
          borderRadius: '0px' /* Set border radius to 3px */,
          cursor: 'pointer',
          outline: 'none' /* Remove button outline on focus */,
          fontFamily: 'Inter, sans-serif' /* Use the Inter font */,
          fontSize: '12px' /* Set a larger font size, e.g., 16px */,
          padding: '8px 14px' /* Increase padding for a larger button size */,
          transition: 'background-color 0.3s, color 0.3s' /* Add transition effect */,
          position: 'relative',
          marginTop: '0',
        }}
      >
        Change status
      </button>
      {isModalOpen && (
        <>
          <div className="backdrop active" onClick={closeModal}></div>
          <div className="modal-container">
            <IdeaModal closeModal={closeModal} />
          </div>
        </>
      )}
      <ToastContainer /> {/* Container for displaying toast messages */}
    </div>
  );
}

function IdeaModal({ closeModal, setStatusChanged }) {
  const [ideaStatus, setIdeaStatus] = useState('New Idea');
  const [reason, setReason] = useState('');
  const [priority, setPriority] = useState('Low Priority');
  const [showPriority, setShowPriority] = useState(true); // State to handle visibility of Priority options


  const statusOptions = ['Approved', 'Declined'];
  const priorityOptions = ['Low Priority', 'High Priority'];
  const [accessToken, setAccessToken] = useState();
  const { ideaId } = useParams();

  // const handleStatusChange = (event) => {
  //   setIdeaStatus(event.target.value);
  // };
  const handleStatusChange = (event) => {
    const selectedStatus = event.target.value;
    setIdeaStatus(selectedStatus);

    // Check the selected status and toggle visibility of Priority options
    if (selectedStatus === 'Declined') {
      setShowPriority(false);
      setPriority(''); // Reset the priority when 'Declined' is selected
    } else {
      setShowPriority(true);
    }
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
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
  }, []);

  const handleSubmit = () => {
    if (ideaStatus === 'Approved') {
      // Make a POST request to approve the idea
      fetch(`https://developer.britam.com/api/IdeasPortal/ApproveIdea?IdeaId=${ideaId}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: ideaStatus,
        }),
      })
        .then((response) => {
          if (response.ok) {
            // Handle success response for approval
            console.log('Idea approved successfully');
            toast.success('The status was changed successfully!', {
              onClose: () => closeModal(),
            });
            // Delay refresh after showing toast message
            setTimeout(() => {
              window.location.reload();
            }, 5000); // Refresh after 2 seconds (adjust the time as needed)
          } else {
            // Handle error response for approval
            console.error('Failed to approve idea');
            toast.error('Failed to change the status.');
          }
        })
        .catch((error) => {
          // Handle network errors for approval
          console.error('Network error:', error);
          toast.error('Failed to change the status.');
        });
    } else if (ideaStatus === 'Declined') {
      // Make a POST request to decline the idea
      fetch(`https://developer.britam.com/api/IdeasPortal/DeactivateIdea?IdeaId=${ideaId}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: ideaStatus,
        }),
      })
        .then((response) => {
          if (response.ok) {
            // Handle success response for decline
            console.log('Idea declined successfully');
            toast.success('The status was changed to Decline successfully!', {
              onClose: () => closeModal(),
            });
            // Delay refresh after showing toast message
            setTimeout(() => {
              window.location.reload();
            }, 5000); // Refresh after 2 seconds (adjust the time as needed)
          } else {
            // Handle error response for decline
            console.error('Failed to decline idea');
            toast.error('Failed to change the status to Decline.');
          }
        })
        .catch((error) => {
          // Handle network errors for decline
          console.error('Network error:', error);
          toast.error('Failed to change the status to Decline.');
        });
    }

    closeModal();
  };

  return (
    <div className="modal">
      <span className="close" onClick={closeModal}>
        &times;
      </span>
      <h2 className="modal-title">Change Idea Status</h2>
      <div className="status">
        <label>Status:</label>
        <select value={ideaStatus} onChange={handleStatusChange}>
          {statusOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="priority" style={{ display: showPriority ? 'block' : 'none' }}>
        <label>Priority:</label>
        <select value={priority} onChange={handlePriorityChange}>
          {priorityOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="reason">
        <label htmlFor="reason">Reason:</label>
        <textarea id="reason" value={reason} onChange={handleReasonChange} placeholder="Enter reason" />
      </div>
      <div className="button-container">
        <button className="cancel-button" onClick={closeModal}>
          Cancel
        </button>
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Modal;
