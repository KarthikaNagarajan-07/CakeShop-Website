import React from 'react';

const ServingInfo = ({ onClose }) => {
    
  return (
    <div style={styles.popup}>
      <div style={styles.popupContent}>
        <button style={styles.closeButton} onClick={onClose}>X</button>
        <h3>Serving Information</h3>
        <ul>
          <li>0.5 Kg: 4 - 5 Persons</li>
          <li>1 Kg: 8 - 10 Persons</li>
          <li>1.5 Kg: 12 - 14 Persons</li>
          <li>2 Kg: 18 - 20 Persons</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  popup: {
    position: 'absolute',
    top: '50px',  // Adjust this according to your layout
    right: '10px',  // Adjust this according to your layout
    zIndex: 1000,
  },
  popupContent: {
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '15px',
    boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
    width: '200px',  // Adjust the width as needed
  },
  closeButton: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default ServingInfo;
