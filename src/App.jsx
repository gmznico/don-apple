import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faPercent, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import RedirectBox from './RedirectBox'; 
import './index.css'; 

const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <nav className="navbar container">
            <div>
              <img className="logo" src="img/logos/logo-black.png" alt="Don Apple" />
            </div>
            <div className="navbar-menu">
              <a href="#">INICIO</a>
              <a href="#">PRODUCTOS</a>
              <a href="#">NOSOTROS</a>
              <a href="#">PREGUNTAS</a>
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
        </main>
        <footer className='footer'>
          <p>footer @reserverd</p>
        </footer>
      </div>
      
    </Router>
  );
};

export default App;
