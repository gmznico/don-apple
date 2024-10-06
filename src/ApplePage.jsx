import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import './index.css';
import Sidebar from './Sidebar'; //componente barra lateral
import productsData from './products.json';

const ApplePage = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);
// Todos estos const son para que el filtrado ande 
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredProducts = selectedFilter
    ? productsData.filter(product => product.filter === selectedFilter)
    : productsData;

  return (
    <div className="apple-page">
      <header>
        <nav className="navbar container">
          <Link to="/">
            <img className="logo" src="img/logos/logo-black.png" alt="Don Apple" />
          </Link>
          <div className="navbar-menu">
            <Link to="/">INICIO</Link>
            <a href="apple">PRODUCTOS</a>
            <a href="#about">NOSOTROS</a>
            <a href="#questions">PREGUNTAS</a>
          </div>
        </nav>
      </header>

      <ScrollReveal>
        <section className="heroapple">
          <div className="heroapple-content">
            <img className="heroapple-img" src="img/applepage/hero.jpg" alt="iPhone" />
          </div>
          <div className="appletext">
            <h2>Sumérgete en el <br /> Universo Apple</h2>
            <div className="separator"></div>
            <h3>Encuentra tu lado Apple</h3>
          </div>
        </section>
      </ScrollReveal>

      <div className="content-section container">
        <aside>
          <Sidebar onFilterChange={handleFilterChange} />
        </aside>
        <section className="product-list">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ApplePage;
