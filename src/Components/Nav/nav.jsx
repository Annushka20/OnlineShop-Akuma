import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <nav className="Nav-holder">
      <h1 className="site-name">Akuma</h1> 
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Products</NavLink>
      </div>
    </nav>
  );
};

export default Nav;