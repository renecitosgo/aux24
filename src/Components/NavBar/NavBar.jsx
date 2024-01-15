import "./navBarStyled.scss";
import CartWidget from "../CartWidget/CartWidget";
import logoPrincipalAux24 from "../../Images/logos/logoPrincipalAux24Optimizada.jpg";
import Button from 'react-bootstrap/Button';

function NavBar() {

    const haciendoClick = (event) =>{
        console.log(event)
    }

    return  <div className="navBar">
                <div className="logoAndButtons">
                    <img src={logoPrincipalAux24} alt="Logo Principal" className="logoPrincipalAux24" />

                    <Button variant="secondary" className="gradient-button" >Baterías</Button>
                    <Button variant="secondary" className="button-text gradient-button">Auxilios{"\n"} Inmediatos</Button>
                    <Button variant="secondary" className="button-text gradient-button">Quiero{"\n"} Ser Socio</Button>

                </div>
                
                <CartWidget number ={6} haciendoClick ={haciendoClick} />
            </div>;  
}

export default NavBar;

