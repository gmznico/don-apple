import React, { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import "../index.css";
import Sidebar from "../components/Sidebar";
import productsData from "../products.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const finishPurchase = () => {
    const products = cart
      .map((item) => `${item.name} (x${item.quantity})`)
      .join(", ");
    const prices = cart
      .map((item) => `$${item.price * item.quantity}`)
      .join(", ");
    const message = `Quiero consultar sobre: ${products}. Precios: ${prices}.`;
    const whatsappLink = `https://wa.me/5493454117878?text=${encodeURIComponent(
      message
    )}`; //mensaje con productos a warap
    window.open(whatsappLink, "_blank");
  };

  const filteredProducts = selectedFilter
    ? productsData.filter((product) => product.filter === selectedFilter)
    : productsData;

  return (
    <>
      <main className="products">
        <ScrollReveal>
          <section className="heroapple">
            <div className="heroapple-content">
              <img
                className="heroapple-img"
                src="img/applepage/hero.jpg"
                alt="iPhone"
              />
            </div>
            <div className="appletext">
              <h2>
                Sumérgete en nuestro <br /> cátalogo
              </h2>
              <div className="separator"></div>
              <h3>Encuentra lo que necesitas</h3>
            </div>
          </section>
        </ScrollReveal>

        <div className="content-section container">
          <aside>
            <Sidebar onFilterChange={handleFilterChange} />
          </aside>

          <section className="product-list">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-info">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="product-details">
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <p className="product-price">${product.price}</p>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => addToCart(product)}
                    >
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>

        <button className="floating-cart-icon" onClick={toggleCart}>
          <FontAwesomeIcon icon={faShoppingCart} size="2xl" />
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </button>

        {isCartOpen && (
          <div className={`cart-modal ${isCartOpen ? "show" : ""}`}>
            <h3>Tu Carrito</h3>
            <ul>
              {cart.map((product) => (
                <li key={product.id} className={`product-in-cart show`}>
                  <img src={product.image} alt={product.name} />
                  <span>
                    {product.name} (x{product.quantity})
                  </span>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
            <button onClick={clearCart}>Borrar Todos</button>
            <button onClick={finishPurchase}>Terminar Compra</button>
            <button onClick={toggleCart}>Cerrar</button>
          </div>
        )}
      </main>
    </>
  );
};

export default Products;
