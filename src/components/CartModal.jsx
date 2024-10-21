import React from "react";

const CartModal = ({ cart, onClose, onRemove, onClear }) => {
  const generateWhatsAppMessage = () => {
    let message =
      "Hola, me gustaría consultar la disponibilidad de los siguientes productos:";
    cart.forEach((product, index) => {
      message += `\n${index + 1}. ${product.name} x${product.quantity} - $${
        product.price * product.quantity
      }`;
    });
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/yourphonenumber?text=${encodedMessage}`,
      "_blank"
    ); //mensaje con productos a warap
  };

  return (
    <div className="cart-modal">
      <h3>Carrito</h3>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            {product.name} x{product.quantity} - $
            {product.price * product.quantity}
            <button onClick={() => onRemove(product)} className="remove-btn">
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <button onClick={generateWhatsAppMessage}>Terminar compra</button>
      <button onClick={onClear}>Borrar todos</button>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default CartModal;
