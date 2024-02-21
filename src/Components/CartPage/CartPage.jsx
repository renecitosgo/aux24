import { useContext } from "react";
import CartContext from "../Context/CartContext";
import Button from "../Button/Button";
import "./cartPage.scss"
import EmojiEmotionsSharpIcon from '@mui/icons-material/EmojiEmotionsSharp'


const CartPage = ()=>{
    const { itemsCart, quantity, removeItem, clearCart } = useContext(CartContext)

    

    return (
        <div className="CartPage">
            {quantity > 0 ? (
            <h2  className="h2NameCarrito">Tu Carrito de Compras</h2>
            ) : ( 
            <div className="emptyCartMessage" > 
                <h4>Carrito Vacío <EmojiEmotionsSharpIcon /></h4>
                <img src="./Images/fondos/carritoVacioMessage.jpg" alt="Imagen_que_indica_carrito_vacío" />
            </div>
            )}
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
            {quantity >0 ? <Button className="clearCartButton" onClick={clearCart}>Limpiar Carrito💔</Button> : null}
        </div>
    )
}
export default CartPage