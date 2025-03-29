import React from 'react';
import { NavLink } from 'react-router-dom';
import './cart.css';

const Cart = ({ cartCount }) => {
  return (
    <NavLink to="/cart" className="cart-link">
      <i className="fas fa-shopping-cart"></i>
      {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
    </NavLink>
  );
};

export default Cart;