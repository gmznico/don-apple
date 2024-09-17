import React from 'react';
import './index.css';

const ProductCard = ({ image, name, price, rating }) => {
  return (
    <div className="product-card">
      <img className="product-image" src={image} alt={name} />
      <h3>{name}</h3>
      <p className="product-price">${price}</p>
      <div className="product-rating">{'⭐'.repeat(rating)}</div>
    </div>
  );
};

export default ProductCard;
