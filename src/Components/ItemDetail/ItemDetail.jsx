import "./itemDetail.scss"
import ItemCount from "../ItemCount/ItemCount"
import React, { useContext } from 'react'
import CartContext from '../Context/CartContext';


const ItemDetail = ({id, name, img, price, stock, description}) => {
    const cartContext = useContext(CartContext)
    const { addItems } = cartContext
    const quantity = cartContext.quantity

    const addToCart = (quantityToAdd) => {
        addItems({id, name, price}, quantityToAdd)
    }

    return (
        <article className="CardItemDetail">
            <header className="HeaderDetail">
                <h2 className="ItemHeaderDetail">{name}</h2>
            </header>

            <picture>
                <img src={img} alt={name} className="ItemImgDetail"/>
            </picture>
        
            <section>
                <p className="InfoDetail">Precio: {price}</p>
                <p className="InfoDetail">Stock disponible: {stock}</p>
                <p className="InfoDetail">Descripción: {description}</p>
            </section>

            <footer className='ItemFooterDetail'>
                <ItemCount initial={0} stock={stock} onAdd={addToCart} />
            </footer>
        </article>
    );
}
        
export default ItemDetail
