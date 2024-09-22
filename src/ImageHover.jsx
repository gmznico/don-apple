import React from 'react';
import './index.css'; 

const ImageHover = () => {
  return (
    <div className="image-container">
      <a 
        href="https://www.instagram.com/donapple__" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img src="img/products/donappleiphone.png" alt="Producto" className="hover-image" />
      </a>
    </div>
  );
};

export default ImageHover;
