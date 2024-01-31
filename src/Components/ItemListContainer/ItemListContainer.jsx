import React, { useEffect, useState } from 'react';
import "./itemListContainer.scss"
import { getProducts, products } from '../ServerMock/ProductMock';
import ItemList from "../ItemList/ItemList"


const ItemListContainer = ({greeting})=>{

    const [items, setItems] = useState ([])


    useEffect(()=>{
        getProducts()
            .then((res) => setItems(res))
            .catch(err=> console.log(err.message))
    }, [])

    return (
        <div className='container' >
            <h1 className='greeting text-center' >{greeting}</h1>

            <ItemList products={products} />

        </div>
    )
}

export default ItemListContainer    