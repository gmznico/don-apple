import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar container">
      <a href="/">
        <img className="logo" src="img/logos/logo-black.png" alt="Don Apple" />
      </a>
      <ul className="navbar-menu">
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="products">PRODUCTOS</Link>
        </li>
        <li>
          <Link to="about">NOSOTROS</Link>
        </li>
        <li>
          <Link to="cuestions">PREGUNTAS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
