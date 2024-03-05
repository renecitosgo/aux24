import React from "react";
import "./Styles/App.scss";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"; 
import CartPage from "./Components/CartPage/CartPage"
import { Routes, Route } from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";



function App(){
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                <Route path='*' element={<h1>404 NOT FOUND</h1>} />             
                <Route path="/cart" element={<CartPage/>} />
                <Route path="Checkout" element={<Checkout/>} />
            </Routes>
        </>
    );  
}  



export default App;
