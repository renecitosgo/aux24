import "./navBarStyled.scss"
import CartContext from "../Context/CartContext"
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"
import { useContext } from "react"

const categories = [
  { path: "/category/baterias", text: "Baterías" },
  { path: "/category/emergencias&auxilios", text: "Emergencias & Auxilios" },
  { path: "/category/quiero-ser-socio", text: "Quiero Ser Socio" },
];

function NavBar() {

  const {itemsCart } = useContext(CartContext)

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
      {itemsCart.length >0 && <CartWidget/>}
    </div>
  );  
}

export default NavBar
