import "./layoutStyled.scss";
import React, { useEffect, useState} from "react";
import { Mouse } from "@mui/icons-material";
import MouseMove from "../VariosBorrarLuego/MouseMove";
import Formulario from "../VariosBorrarLuego/Formulario";
import InputSinVocales from "../VariosBorrarLuego/InputSinVocales";


function Layout (props){
    return (
            

        <div className="layout" >
            <MouseMove/>
            <Formulario/>
            <InputSinVocales/>
        </div>
    )
}

export default Layout