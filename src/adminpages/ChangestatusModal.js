import React, { useState } from 'react';
import './ChangeStatusModal.css';

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
    backgroundColor: 'white', /* Initial background color */
    color: '#0086C9', /* Initial text color */
    border: '2px solid #0086C9', /* Border color and width */
    borderRadius: '3px', /* Set border radius to 3px */
    cursor: 'pointer',
    outline: 'none', /* Remove button outline on focus */
    fontFamily: 'Inter, sans-serif', /* Use the Inter font */
    fontSize: '12px', /* Set a larger font size, e.g., 16px */
    padding: '8px 14px', /* Increase padding for a larger button size */
    transition: 'background-color 0.3s, color 0.3s', /* Add transition effect */
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
    </div>
  );
}

function IdeaModal({ closeModal }) {
  const [ideaStatus, setIdeaStatus] = useState('New Idea');
  const [reason, setReason] = useState('');
  const [priority, setPriority] = useState('Low Priority');

  const statusOptions = ['New Idea', 'Approved', 'Declined'];
  const priorityOptions = ['Low Priority', 'High Priority'];

  const handleStatusChange = (event) => {
    setIdeaStatus(event.target.value);
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleSubmit = () => {
    // Add your submission logic here
    // For example, you can send data to an API or update the state
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
      <div className="priority">
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
        <textarea
          id="reason"
          value={reason}
          onChange={handleReasonChange}
          placeholder="Enter reason"
        />
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
