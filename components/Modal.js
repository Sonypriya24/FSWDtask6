// src/components/Modal.js
import React from 'react';
import '../styles/Modal.css';

const Modal = ({ image, closeModal }) => {
  return (
    <div className="modal">
      <span className="close" onClick={closeModal}>&times;</span>
      <img className="modal-content" src={image} alt="" />
    </div>
  );
};

export default Modal;
