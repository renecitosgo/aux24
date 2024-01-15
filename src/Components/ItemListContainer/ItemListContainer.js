import React from 'react';
import "./itemListContainer.scss"

const ItemListContainer = ({greeting})=>{
    return (
        <div>
            <h1 className='greeting text-center' >{greeting}</h1>
        </div>
    )
}

export default ItemListContainer    