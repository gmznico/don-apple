
const Navbar = () =>{
    return (
      <nav className="navbar container">
        <a href="/">
          <img className="logo" src="img/logos/logo-black.png" alt="Don Apple" />
        </a>
        <div className="navbar-menu">
          <a href="/">INICIO</a>
          <a href="#products">PRODUCTOS</a>
          <a href="#about">NOSOTROS</a>
          <a href="#cuestions">PREGUNTAS</a>
        </div>
      </nav>

    )
};

export default Navbar;