import React, { useEffect, useState } from 'react';
import "./itemListContainer.scss";
import { getProducts, products, getProductsByCategory } from '../ServerMock/ProductMock';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';


const ItemListContainer = ({greeting})=>{

    const [products, setproducts] = useState ([])

    const { categoryId } = useParams()


    useEffect(()=>{

        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)

            .then(response =>{
            setproducts(response)
            })

            .catch(error => {
            console.error (error)
            })

    }, [categoryId])

    return (
        <div className='container' >
            <h1 className='greeting text-center' >{greeting}</h1>

            <ItemList products={products} />

        </div>
    )
}

export default ItemListContainer    