

function App() {

  return (
    <>
      <nav class="navbar">
        <div class="navbar-logo">
          <img src="." alt="Don Apple"></img>
        </div>
        <div class="navbar-menu">
          <a href="#" class="active">INICIO</a>
          <a href="#">PRODUCTOS</a>
          <a href="#">NOSOTROS</a>
          <a href="#">PREGUNTAS</a>
        </div>
      </nav>


      <section class="hero">
        <div class="hero-image">
            <img src="img/products/iphonegrande.png" alt="iPhone"></img>
          </div>
        <div class="hero-text">
          <h1>Lorem ipsum</h1>
          <p>Consectetur adielit</p>
          <button>Ver más</button>
        </div>
      </section>


      <section class="features">
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


      <section class="products">
        <div class="product-card">
          <img src="img/products/iphonegrande.png" alt="iPhone"></img>
          <h4>Lorem ipsum</h4>
          <button>Ver más</button>
        </div>
        <div class="product-card">
          <img src="img/products/macbook.png" alt="MacBook"></img>
          <h4>Lorem ipsum</h4>
          <button>Ver más</button>
        </div>
        <div class="product-card">
          <img src="img/products/applewatch.png" alt="Apple Watch"></img>
          <h4>Lorem ipsum</h4>
          <button>Ver más</button>
        </div>
        <div class="product-card">
          <img src="img/products/idrone.png" alt="Dron"></img>
          <h4>Lorem ipsum</h4>
          <button>Ver más</button>
        </div>
        <div class="product-card">
            <img src="img/products/airpods.png" alt="Dron"></img>
            <h4>Lorem ipsum</h4>
            <button>Ver más</button>
          </div>
      </section>

    </>
  )
}

export default App
