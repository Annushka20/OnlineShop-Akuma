import './App.css';
import { Routes, Route } from 'react-router-dom';
import Error from './Pages/Error/error';
import { Nav, Main, Footer, ProductsC, ProductDetails, Layout } from './Components/index';
import CartPage from './Pages/Error/Cart/CartPage';
import { createContext, useState } from 'react';

export const CartContext = createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, count: item.count + 1, cardPrice: item.price * (item.count + 1) }
            : item
        );
      }
      return [...prevItems, { ...product, count: 1, cardPrice: product.price }];
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, count: newQuantity, cardPrice: item.price * newQuantity }
          : item)
    );
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.count, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, cartCount }}>
      <Routes>
        <Route path="/" element={<Layout cartCount={cartCount} />}>
          <Route index element={<Main />} /> 
          <Route path="products" element={<ProductsC onAddToCart={addToCart} />} /> 
          <Route path="products/:id" element={<ProductDetails onAddToCart={addToCart} />} /> 
          <Route path="cart" element={<CartPage cartItems={cartItems} onQuantityChange={updateQuantity} />} />
          <Route path="*" element={<Error />} /> 
        </Route>
      </Routes>
    </CartContext.Provider>
  );
}

export default App;