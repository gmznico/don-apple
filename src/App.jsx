import React from 'react';
import Header from './loyout/Header';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faPercent, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import RedirectBox from './RedirectBox';
import ImageHover from './ImageHover';
import ScrollReveal from './ScrollReveal';
import ApplePage from './ApplePage';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <main className="container">
                  <ScrollReveal>
                    <section className="cards">
                      <div className="envio">
                        <div className="envio-icon card-flex">
                          <FontAwesomeIcon icon={faTruck} size="2xl" style={{ color: "#333333" }} />
                          <h3 className="card-h3">ENVIOS</h3>
                        </div>
                        <p className="card-p">Envio a todo el país.</p>
                      </div>
                      <div className="atencion">
                        <div className="atencion-icon card-flex">
                          <FontAwesomeIcon icon={faHeadphones} size="2xl" style={{ color: "#333333" }} />
                          <h3 className="card-h3">ATENCIÓN</h3>
                        </div>
                        <p className="card-p">Atención las 24h.</p>
                      </div>
                      <div className="garantia">
                        <div className="garantia-icon card-flex">
                          <FontAwesomeIcon icon={faPercent} size="2xl" style={{ color: "#333333" }} />
                          <h3 className="card-h3">GARANTÍA</h3>
                        </div>
                        <p className="card-p">Contamos con garantía.</p>
                      </div>
                    </section>
                  </ScrollReveal>

                  <ScrollReveal>
                    <ImageHover />
                  </ScrollReveal>

                  <ScrollReveal>
                    <section className="redirect-container">
                      <RedirectBox label="APPLE" link="/apple" backgroundImage="img/products/apple.jpg" />
                      <RedirectBox label="RELOJES" link="/apple" backgroundImage="img/products/applewatch.jpg" />
                      <RedirectBox label="LAPTOPS" link="/apple" backgroundImage="img/products/laptops.jpg" />
                    </section>
                  </ScrollReveal>

                  <ScrollReveal>
                    <section id="nosotros" className="nosotros-section">
                      <div className="nosotros-container">
                        <h2 className="nosotros-title">Sobre Nosotros</h2>
                        <p className="nosotros-text">
                          En <strong>Don Apple</strong>, somos un emprendimiento con grandes aspiraciones de crecimiento. Nos apasiona la tecnología y, en particular, todo lo relacionado con el universo Apple. Nuestro objetivo es ofrecer productos de alta calidad junto con soluciones innovadoras que mejoren la experiencia de nuestros clientes.
                        </p>
                        <p className="nosotros-text">
                          Con dedicación y esfuerzo, buscamos crecer día a día, brindando siempre un servicio cercano y personalizado. ¡Gracias por confiar en nosotros y ser parte de esta emocionante aventura!
                        </p>
                        <Link to="/contacto" className="btn-nosotros">Contáctanos</Link>
                      </div>
                    </section>
                  </ScrollReveal>
                </main>
              </>
            }
          />
          <Route path="/apple" element={<ApplePage />} />
        </Routes>

        <footer className="footer">
          <ScrollReveal>
            <section className="footer-primary">
              <div>
                <Link to="/">
                  <img className="footer-logo" src="img/logos/logo-white.png" alt="Don Apple" />
                </Link>
              </div>
              <div className="footer-redes">
                <p className="redes-p">Síguenos</p>
                <div className="footer-redes-icon">
                  <a href="#"><FontAwesomeIcon icon={faFacebookF} size="2xl" /></a>
                  <a href="#"><FontAwesomeIcon icon={faInstagram} size="2xl" /></a>
                  <a href="#"><FontAwesomeIcon icon={faEnvelope} size="2xl" /></a>
                </div>
              </div>
            </section>
          </ScrollReveal>
          <section className="footer-text">
            <p className="footer-text-p">&copy; 2024 - Todos los derechos reservados.</p>
          </section>
        </footer>
      </div>
    </Router>
  );
};

export default App;
