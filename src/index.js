import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/App.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './Components/Context/CartContext';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC99NhBckgOh5d-ypf-SAVVEs6WP7U31ZY",
  authDomain: "aux24-aa2eb.firebaseapp.com",
  projectId: "aux24-aa2eb",
  storageBucket: "aux24-aa2eb.appspot.com",
  messagingSenderId: "273636511014",
  appId: "1:273636511014:web:ab14fe9c164749384fc5e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
