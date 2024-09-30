import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import productsData from './products.json';

const ApplePage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    brand: [],
    category: [],
    priceRange: [0, 2000]
  });

  useEffect(() => {
    setProducts(productsData.products);
  }, []);

  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter(item => item !== value)
        : [...prevFilters[filterType], value]
    }));
  };

  const handlePriceChange = (min, max) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      priceRange: [min, max]
    }));
  };

  const filteredProducts = products.filter(product => 
    (filters.brand.length === 0 || filters.brand.includes(product.brand)) &&
    (filters.category.length === 0 || filters.category.includes(product.category)) &&
    (product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1])
  );

  const uniqueBrands = [...new Set(products.map(product => product.brand))];
  const uniqueCategories = [...new Set(products.map(product => product.category))];

  return (
    <div className="apple-page">
      <header>
        <nav className="navbar container">
          <Link to="/">
            <img className="logo" src="/img/logos/logo-black.png" alt="Don Apple" />
          </Link>
          <div className="navbar-menu">
            <Link to="/">INICIO</Link>
            <a href="#products">PRODUCTOS</a>
            <a href="#about">NOSOTROS</a>
            <a href="#questions">PREGUNTAS</a>
          </div>
        </nav>
      </header>

      <div className="container">
        <div className="product-page-layout">
          <ScrollReveal>
            <aside className="filters">
              <h3>Filtros</h3>
              <div className="filter-section">
                <h4>Marca</h4>
                {uniqueBrands.map(brand => (
                  <label key={brand}>
                    <input
                      type="checkbox"
                      checked={filters.brand.includes(brand)}
                      onChange={() => handleFilterChange('brand', brand)}
                    />
                    {brand}
                  </label>
                ))}
              </div>
              <div className="filter-section">
                <h4>Categoría</h4>
                {uniqueCategories.map(category => (
                  <label key={category}>
                    <input
                      type="checkbox"
                      checked={filters.category.includes(category)}
                      onChange={() => handleFilterChange('category', category)}
                    />
                    {category}
                  </label>
                ))}
              </div>
              <div className="filter-section">
                <h4>Rango de Precio</h4>
                <input
                  type="range"
                  min="0"
                  max="2000"
                  value={filters.priceRange[0]}
                  onChange={(e) => handlePriceChange(parseInt(e.target.value), filters.priceRange[1])}
                />
                <input
                  type="range"
                  min="0"
                  max="2000"
                  value={filters.priceRange[1]}
                  onChange={(e) => handlePriceChange(filters.priceRange[0], parseInt(e.target.value))}
                />
                <p>${filters.priceRange[0]} - ${filters.priceRange[1]}</p>
              </div>
            </aside>
          </ScrollReveal>

          <main className="product-grid">
            <ScrollReveal>
              <h1>Nuestros productos</h1>
              <div className="products">
                {filteredProducts.map(product => (
                  <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.brand}</p>
                    <p>${product.price}</p>
                    <button>Añadir al carrito</button>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </main>
        </div>
      </div>

      <footer className="footer">
        {}
      </footer>
    </div>
  );
};

export default ApplePage;