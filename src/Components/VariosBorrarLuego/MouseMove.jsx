/*import React, { useEffect, useState } from 'react';

const MouseMove = () => {

    const [stateButton, setStateButton] = useState(false);

    const handleMouseMove = (event)=>{
        console.log(`mouse x: ${event.clientX}`)
    }

    useEffect (()=>{
        if(stateButton){
            window.addEventListener("mousemove", handleMouseMove)
        }else{
            window.removeEventListener("mousemove", handleMouseMove)


        }
        
        return ()=>{
            window.removeEventListener("mousemove", handleMouseMove)
        }

    }, [stateButton])

    console.log(stateButton);
        
    return (
        <div>
            <button onClick={() => setStateButton(true)}> Activar MouseMove </button>
            <button onClick={() => setStateButton(false)}> Desactivar MouseMove </button>
        </div>
    
    );
};

export default MouseMove;*/
