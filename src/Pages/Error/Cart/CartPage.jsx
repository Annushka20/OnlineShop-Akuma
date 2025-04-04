import React from "react";
import "./cartPage.css";
import { useCart } from "../../../context/CartContext";

const CartItem = ({ item, onQuantityChange }) => {
  const handleIncrement = () => {
    onQuantityChange(item.id, item.count + 1);
  };

  const handleDecrement = () => {
    if (item.count > 1) {
      onQuantityChange(item.id, item.count - 1);
    }
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.title}</h3>
        <p>${item.price} each</p>
        <div className="quantity-controls">
          <button onClick={handleDecrement}>-</button>
          <span>{item.count}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <p>Total: ${(item.price * item.count).toFixed(2)}</p>
      </div>
    </div>
  );
};

const CartPage = () => {
  const { cartItems, onQuantityChange } = useCart();
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cartItems?.length === 0 ? (
        <p>cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems?.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onQuantityChange={onQuantityChange}
              />
            ))}
          </div>
          <div className="cart-summary">
            <h2>Total: ${total.toFixed(2)}</h2>
            <button className="checkout-button">Buy </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
