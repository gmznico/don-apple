import ScrollReveal from "../components/ScrollReveal";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <ScrollReveal>
        <section className="footer-primary">
          <div>
            <Link to="/">
              <img
                className="footer-logo"
                src="img/logos/logo-white.png"
                alt="Don Apple"
              />
            </Link>
          </div>
          <div className="footer-redes">
            <p className="redes-p">Contactos</p>
            <div className="footer-redes-icon">
              <a
                href="https://www.instagram.com/donapple__"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} size="2xl" />
              </a>
              <a
                href="https://www.instagram.com/donapple__"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="2xl" />
              </a>
              <a
                href="https://www.instagram.com/donapple__"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} size="2xl" />
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
      <section className="footer-text">
        <p className="footer-text-p">
          &copy; 2024 - Todos los derechos reservados.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
