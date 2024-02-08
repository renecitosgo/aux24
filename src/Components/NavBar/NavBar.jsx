import "./navBarStyled.scss";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const categories = [
  { path: "/category/baterias", text: "Baterías" },
  { path: "/category/emergencias&auxilios", text: "Emergencias & Auxilios" },
  { path: "/category/quiero-ser-socio", text: "Quiero Ser Socio" },
];

function NavBar() {
  return (
    <div className="navBar">
      <div className="logoAndButtons">
        <Link to="/"><img src={"/Images/logos/logoPrincipalAux24Optimizada.jpg"} alt="Logo Principal" className="logoPrincipalAux24" /></Link>

        {categories.map((category) => (
          <div className="misEstilosdeButtonNavLink" key={category.path}>
            <NavLink to={category.path} className={(navData) => (navData.isActive ? "button-text ActiveOption" : "button-text")}>
              {category.text}
            </NavLink>
          </div>
        ))}
      </div>  
      <CartWidget/>
    </div>
  );  
}

export default NavBar;
