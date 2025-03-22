import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import './productsC.css';

const ProductsC = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
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
          <NavLink
            to={`/products/${product.id}`}
            key={product.id}
            className="product-card"
          >
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default ProductsC;