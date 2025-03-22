import './App.css';
import { Routes, Route } from 'react-router-dom';
import Error from './Pages/Error/error';
import {Nav, Main, Footer, ProductsC, ProductDetails, Layout} from './Components/index'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} /> 
        <Route path="products" element={<ProductsC />} /> 
        <Route path="products/:id" element={<ProductDetails />} /> 
        <Route path="*" element={<Error />} /> 
      </Route>
    </Routes>
  );
}

export default App;