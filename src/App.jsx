

function App() {

  return (
    <>

    <header>
      <nav className="navbar container">
        <div>
          <h1>Don Apple</h1>
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
          <div>
            <img className="hero-img" src="img/products/iphonegrande.png" alt="iPhone"></img>
          </div>
          <div className="hero-text">
            <h2>Lo que estabas buscando</h2>
            <h3>IPHONE 16</h3>
            <p>¡Ya esta aquí!</p>
            <button>Ver más</button>
          </div>
        </div> 
      </section>
    </header>
      


      <section className="features">
        <div>
          <img src="img/products/envios.png" alt="Envíos"></img>
          <h3>ENVIOS</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div>
          <img src="img/products/atencion.png" alt="Atención"></img>
          <h3>ATENCIÓN</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div>
          <img src="img/products/garantia.png" alt="Garantía"></img>
          <h3>GARANTÍA</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </section>


      <section className="products">
        <div className="product-card">
          <img src="img/products/iphonegrande.png" alt="iPhone"></img>
          <h4>Lorem ipsum</h4>
          <button>Ver más</button>
        </div>
        <div className="product-card">
          <img src="img/products/macbook.png" alt="MacBook"></img>
          <h4>Lorem ipsum</h4>
          <button>Ver más</button>
        </div>
        <div className="product-card">
          <img src="img/products/applewatch.png" alt="Apple Watch"></img>
          <h4>Lorem ipsum</h4>
          <button>Ver más</button>
        </div>
        <div className="product-card">
          <img src="img/products/idrone.png" alt="Dron"></img>
          <h4>Lorem ipsum</h4>
          <button>Ver más</button>
        </div>
        <div className="product-card">
            <img src="img/products/airpods.png" alt="Dron"></img>
            <h4>Lorem ipsum</h4>
            <button>Ver más</button>
          </div>
      </section>

    </>
  )
}

export default App
