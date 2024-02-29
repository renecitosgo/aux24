import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/App.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './Components/Context/CartContext';
import { createRoot } from 'react-dom/client';
import db from "./Components/Services/Firebase/Firebase"

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


reportWebVitals();
