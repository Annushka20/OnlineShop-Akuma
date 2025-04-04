import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                count: item.count + 1,
                cardPrice: item.price * (item.count + 1),
              }
            : item
        );
      }
      return [...prevItems, { ...product, count: 1, cardPrice: product.price }];
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, count: newQuantity, cardPrice: item.price * newQuantity }
          : item
      )
    );
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.count, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQuantity, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
