import React from "react";
import "./Styles/App.scss";
import NavBar from "./Components/NavBar/NavBar";
import ItemCount from "./Components/ItemCount/ItemCount";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"; 
import Button from "./Components/Button/Button";
import Layout from "./Components/Layout/Layout";
import { Routes, Route } from "react-router-dom";

function App(){
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                <Route path='*' element={<h1>404 NOT FOUND</h1>} />             
            </Routes>
        </>
    );  
}   

export default App;
