import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faPercent, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import RedirectBox from './RedirectBox';
import ProductSection from './ProductSection';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header id='inicio'>
          <nav className="navbar container">
            <div>
              <img className="logo" src="img/logos/logo-black.png" alt="Don Apple" />
            </div>
            <div className="navbar-menu">
              <a href="#inicio">INICIO</a>
              <a href="#products">PRODUCTOS</a>
              <a href="#about">NOSOTROS</a>
              <a href="#cuestions">PREGUNTAS</a>
            </div>
          </nav>

          <section className="hero">
            <div className="hero-content container">
              <img className="hero-img" src="img/products/iphonegrande.png" alt="iPhone" />
              <div className="hero-text">
                <h2>¡Todo lo que buscas!</h2>
                <h3>Venta por mayor y menor</h3>
                <div className="hero-p">
                  <p>Equipos Apple | Nuevos y Usados</p>
                  <button className="hero-button button">
                    <span>Ver más</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </header>

        <main className="container">
          <section className="cards">
            <div className="envio">
              <div className="envio-icon card-flex">
                <FontAwesomeIcon icon={faTruck} size='2xl' style={{color: "#333333"}} />
                <h3 className='card-h3'>ENVIOS</h3>
              </div>
              <p className='card-p'>Envio a todo el pais.</p>
            </div>
            <div className="atencion">
              <div className="atencion-icon card-flex">
                <FontAwesomeIcon icon={faHeadphones} size='2xl' style={{color: "#333333"}} />
                <h3 className='card-h3'>ATENCIÓN</h3>
              </div>
              <p className='card-p'>Atención las 24h.</p>
            </div>
            <div className="garantia">
              <div className="garantia-icon card-flex">
                <FontAwesomeIcon icon={faPercent} size='2xl' style={{color: "#333333"}} />
                <h3 className='card-h3'>GARANTÍA</h3>
              </div>
              <p className='card-p'>Contamos con garantía.</p>
            </div>
          </section>

          <section className="redirect-container">
            <RedirectBox label="APPLE" link="/apple" backgroundImage="img/products/apple.jpg" />
            <RedirectBox label="RELOJES" link="/relojes" backgroundImage="img/products/applewatch.jpg" />
            <RedirectBox label="LAPTOPS" link="/laptops" backgroundImage="img/products/laptops.jpg" />
          </section>

          <ProductSection /> {}
        </main>

        <footer className='footer'>
          <section className='redes'>
             <a href=""><FontAwesomeIcon icon={faFacebookF} size='2xl'/></a>
             <a href=""><FontAwesomeIcon icon={faInstagram} size='2xl'/></a>
             <a href=""><FontAwesomeIcon icon={faEnvelope} size='2xl'/></a>
          </section>
          <hr className='container'/>
          <section className='footer-text'>
            <p className='footer-text-p'>All right reserverd.</p>
          </section>
        </footer>
      </div>
    </Router>
  );
};

export default App;
