// src/components/ImageItem.js
import React from 'react';
import '../styles/ImageItem.css';

const ImageItem = ({ image, openModal }) => {
  return (
    <div className="image-item" onClick={() => openModal(image)}>
      <img src={image} alt="" />
    </div>
  );
};

export default ImageItem;
