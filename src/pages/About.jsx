import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import "../index.css"; // Importa el archivo de estilos

const About = () => {
  return (
    <>
      <main id="nosotros" className="nosotros-section">
        <div className="nosotros-overlay">
          <div className="nosotros-content container">
            <h2 className="nosotros-title">Sobre Nosotros</h2>
            <p className="nosotros-text">
              En <strong>Don Apple</strong>, somos un emprendimiento con grandes
              aspiraciones de crecimiento. Nos apasiona la tecnología y, en
              particular, todo lo relacionado con el universo Apple. Nuestro
              objetivo es ofrecer productos de alta calidad junto con soluciones
              innovadoras que mejoren la experiencia de nuestros clientes.
            </p>
            <p className="nosotros-text">
              Con dedicación y esfuerzo, buscamos crecer día a día, brindando
              siempre un servicio cercano y personalizado. ¡Gracias por confiar
              en nosotros y ser parte de esta emocionante aventura!
            </p>
            <button to="/contacto" className="btn-nosotros">
              Contáctanos
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
