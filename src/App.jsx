import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faPercent,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";
import RedirectBox from "./components/RedirectBox";
import ImageHover from "./components/ImageHover";
import ScrollReveal from "./components/ScrollReveal";
import ScrollTop from "./components/ScrollTop";
import Products from "./pages/Products";
import About from "./pages/About";
import "./index.css";
import Navbar from "./layout/Navbar";
import Cuestions from "./pages/Cuestions";

const App = () => {
  return (
    <div className="app">
      <Navbar />
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
                        <FontAwesomeIcon
                          icon={faTruck}
                          size="2xl"
                          style={{ color: "#333333" }}
                        />
                        <h3 className="card-h3">ENVIOS</h3>
                      </div>
                      <p className="card-p">Envio a todo el país.</p>
                    </div>
                    <div className="atencion">
                      <div className="atencion-icon card-flex">
                        <FontAwesomeIcon
                          icon={faHeadphones}
                          size="2xl"
                          style={{ color: "#333333" }}
                        />
                        <h3 className="card-h3">ATENCIÓN</h3>
                      </div>
                      <p className="card-p">Atención las 24h.</p>
                    </div>
                    <div className="garantia">
                      <div className="garantia-icon card-flex">
                        <FontAwesomeIcon
                          icon={faPercent}
                          size="2xl"
                          style={{ color: "#333333" }}
                        />
                        <h3 className="card-h3">GARANTÍA</h3>
                      </div>
                      <p className="card-p">Todos los productos.</p>
                    </div>
                  </section>
                </ScrollReveal>

                <ScrollReveal>
                  <section className="redirect-container">
                    <RedirectBox
                      label="APPLE"
                      link="/products"
                      backgroundImage="img/products/apple.jpg"
                    />
                    <RedirectBox
                      label="RELOJES"
                      link="/products"
                      backgroundImage="img/products/applewatch.jpg"
                    />
                    <RedirectBox
                      label="LAPTOPS"
                      link="/products"
                      backgroundImage="img/products/laptops.jpg"
                    />
                  </section>
                </ScrollReveal>
              </main>
            </>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/cuestions" element={<Cuestions />} />
      </Routes>
      <ScrollTop />
      <Footer />
    </div>
  );
};

export default App;
