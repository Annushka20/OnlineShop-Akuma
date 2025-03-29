import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './product.css';

const ProductDetails = ({ onAddToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProduct({
          ...res,
          count: 1,
          cardPrice: res.price
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error', error);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      onAddToCart(product);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!product) {
    return <div className="error">Product not found</div>;
  }

  return (
    <div className="product-details">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} className="product-image" />
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price}</p>
      <p className="product-category">{product.category}</p>
      <p className="product-rating">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
      <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default ProductDetails;