import React from "react";
import "./Styles/App.scss";
import NavBar from "./Components/NavBar/NavBar";
import ItemCount from "./Components/ItemCount/ItemCount";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Button from "./Components/Button/Button";
import Layout from "./Components/Layout/Layout";
import { Routes, Route } from "react-router-dom";

function App(){
    return (
        <>
            <NavBar />
            <Routes>
                <Route 
                path="/"
                element={<ItemListContainer greeting={"Bienvenido"}/>}
                />
                <Route
                path="/ItemCount"
                element={<ItemCount initial={1} stock={10} onAdd={(quantity) => console.log ("Cantidad agregada 🤗", quantity)}/>}
                />
            </Routes>
        </>
    );
}

export default App;
