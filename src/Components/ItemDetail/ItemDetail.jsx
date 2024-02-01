import "./itemDetail.scss"
import ItemCount from "../ItemCount/ItemCount";
import React from 'react';


const ItemDetail = ({id, name, img, price, stock}) => {

    return (
        <article className="CardItemDetail">
            <header className="HeaderDetail">
                <h2 className="ItemHeaderDetail">
                    {name}
                </h2>
            </header>

            <picture>
                <img src={img} alt={name} className="ItemImgDetail"/>
            </picture>
        
            <section>
                <p className="InfoDetail"> Precio: {price} </p>
                <p className="InfoDetail"> Stock disponible: {stock} </p>
            </section>

            <footer className='ItemFooterDetail'>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log ("Agregó al Carrito")} />
            </footer>
        
        </article>);
    }
    
    export default ItemDetail