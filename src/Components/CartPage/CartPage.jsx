import { useContext } from "react";
import CartContext from "../Context/CartContext";
import Button from "../Button/Button";
import "./cartPage.scss"

const CartPage = ()=>{
    const { itemsCart, removeItem, clearCart } = useContext(CartContext)

    return (
        <div className="CartPage">
            <h2  className="h2NameCarrito">Tu Carrito de Compras</h2>
            <div className="cartItemsContainer">
                {itemsCart.map((item, index)=>{
                    return(
                    <div className="cartItem" key={item.id}>
                        <h3>{item.name}</h3>
                        <p>Cantidad: {item.quantity}</p>
                        <Button className="clear1ItemButton" onClick={()=> removeItem(item.id)} >Eliminar🙂</Button>
                    </div>
                    )
                })
                }
            </div>
            <Button className="clearCartButton" onClick={clearCart}>Limpiar Carrito💔</Button>
        </div>
    )
}
export default CartPage