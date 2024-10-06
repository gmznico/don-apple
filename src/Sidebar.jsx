import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ onFilterChange }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      // estas son las cateogiras, se puede agregar o modificar algo de ser necesario
      title: 'Apple',
      subcategories: [
        { name: 'iPhone', filter: 'iphone' },
        { name: 'Macbooks', filter: 'macbooks' },
        { name: 'AirPods', filter: 'airpods' },
        { name: 'Smartwatchs', filter: 'smartwatchs' }
      ],
    },
    {
      title: 'Netbooks',
      subcategories: [
        { name: 'Macbooks', filter: 'macbooks' },
        { name: 'Netbooks', filter: 'netbooks' }
      ],
    },
    {
      title: 'Celulares',
      subcategories: [
        { name: 'iPhones', filter: 'iphone' },
        { name: 'Samsungs', filter: 'samsungs' }
      ],
    },
  ];

  const toggleCategory = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  const handleFilterClick = (filter) => {
    onFilterChange(filter);
  };

  return (
    <div className="sidebar">
      <h3>Categorías</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <span
              className="category-title"
              onClick={() => toggleCategory(index)}
            >
              {category.title}
            </span>
            <ul
              className={`subcategories ${
                activeCategory === index ? 'open' : 'closed'
              }`}
            >
              {category.subcategories.map((sub, subIndex) => (
                <li key={subIndex}>
                  <Link to="#" onClick={() => handleFilterClick(sub.filter)}>
                    {sub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;