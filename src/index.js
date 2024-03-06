import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './Components/Context/CartContext';
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');
createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals()







