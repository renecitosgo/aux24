import React from "react";
import "./Styles/App.scss";
import NavBar from "./Components/NavBar/NavBar";
import Counter from "./Components/Counter/Counter";

import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App(){
    return (
        <>
            <NavBar />
            <ItemListContainer greeting={"Bienvenido"} />
            <Counter />
        </>
    );
}

export default App;





