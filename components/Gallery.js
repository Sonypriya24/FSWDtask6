// src/components/Gallery.js
import React, { useState } from 'react';
import ImageItem from './ImageItem';
import Modal from './Modal';
import '../styles/Gallery.css';

const images = [
  require('../images/1.png'),
  require('../images/2.png'),
  require('../images/10.png'),
  require('../images/4.png'),
  require('../images/9.png'),
  require('../images/6.png'),
  require('../images/7.png'),
  require('../images/8.png'),
  require('../images/5.png'),
  require('../images/3.png'),
  // Add more image paths here
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <ImageItem key={index} image={image} openModal={openModal} />
      ))}
      {selectedImage && <Modal image={selectedImage} closeModal={closeModal} />}
    </div>
  );
};

export default Gallery;
