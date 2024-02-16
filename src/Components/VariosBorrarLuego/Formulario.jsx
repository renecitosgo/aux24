import React from "react";

function Formulario (){
    const handleSubmit = (event)=>{
        event.preventDefault()
    }

    return(
        <div>
            <h2>Formulario de Contacto</h2>
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" />
                </div>
                <button type="submit" >Enviar</button>

            </form>
        </div>
    )
}

export default Formulario