import './App.css';
import { Routes, Route } from 'react-router-dom';
import Error from './Pages/Error/error';
import { Main, ProductsC, ProductDetails, Layout } from './Components/index';
import CartPage from './Pages/Error/Cart/CartPage';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} /> 
          <Route path="products" element={<ProductsC />} /> 
          <Route path="products/:id" element={<ProductDetails />} /> 
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<Error />} /> 
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
