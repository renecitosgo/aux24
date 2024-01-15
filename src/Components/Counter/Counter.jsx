import "./counterStyled.scss";
import { useState } from "react";


function Counter (){
    const [value, setValue] = useState (0)

    const agrega = ()=>{
        setValue(value +1   )
    }
    const quita = ()=>{
        setValue (value-1)
    }
    return(
        <div className="counter" >
            <p>{value}</p>
            <button onClick={agrega} >+</button>
            <button onClick={quita}>-</button>
        </div>

    );
}
export default Counter