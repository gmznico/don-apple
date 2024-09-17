import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './index.css';

const ProductSection = () => {
  const products = [
    { image: 'img/products/iphonegrande.png', name: 'iPhone', price: '317.892', rating: 5 },
    { image: 'img/products/airpods.png', name: 'AirPods', price: '669.019', rating: 5 },
    { image: 'img/products/applewatch.png', name: 'Reloj Apple', price: '232.640', rating: 4 },
    { image: 'img/products/idrone.png', name: 'Drone Apple', price: '290.438', rating: 4 },
    { image: 'img/products/macbook.png', name: 'MacBook', price: '1.599.575', rating: 5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 5;
  const itemWidth = 200; 
  const containerWidth = 100; 

  const handleNext = () => {
    if (currentIndex < products.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="product-section container">
      <div className="heading-container">
        <h2>Destacados</h2>
        <div className="underline"></div>
      </div>

      <div className="slider-container">
        <button className="slider-button left" onClick={handlePrev}>&lt;</button>
        
        <div 
          className="product-slider" 
          style={{ 
            transform: `translateX(-${(currentIndex / itemsToShow) * 100}%)`, 
            width: `${containerWidth * products.length}%`
          }}
        >
          {products.map((product, index) => (
            <div 
              className="slider-item" 
              key={index} 
              style={{ width: `${100 / itemsToShow}%` }}
            >
              <ProductCard
                image={product.image}
                name={product.name}
                price={product.price}
                rating={product.rating}
              />
            </div>
          ))}
        </div>

        <button className="slider-button right" onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default ProductSection;
