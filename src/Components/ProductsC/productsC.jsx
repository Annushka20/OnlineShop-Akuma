import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import './productsC.css';

const ProductsC = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.map(product => ({
          ...product,
          count: 1,
          cardPrice: product.price
        })));
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="products-container">
      <h1>Our Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <NavLink to={`/products/${product.id}`}>
              <img src={product.image} alt={product.title} className="product-image" />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">${product.price}</p>
            </NavLink>
            <button 
              onClick={() => onAddToCart(product)} 
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsC;