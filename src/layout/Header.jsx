import ScrollReveal from "../components/ScrollReveal";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="inicio">
      <ScrollReveal>
        <section className="hero">
          <div className="hero-content container">
            <img
              className="hero-img"
              src="img/products/iphonegrande.png"
              alt="iPhone"
            />
            <div className="hero-text">
              <h2>¡Todo lo que buscas!</h2>
              <h3>Venta por mayor y menor</h3>
              <div className="hero-p">
                <p>Equipos Apple | Nuevos y Usados</p>
                <Link to="/products" className="hero-button button">
                  <span>Ver más</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </header>
  );
};

export default Header;
