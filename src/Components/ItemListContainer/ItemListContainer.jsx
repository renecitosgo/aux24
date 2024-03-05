import React, { useState, useEffect } from 'react';
import "./itemListContainer.scss";
import { getProducts, products, getProductsByCategory } from '../ServerMock/ProductMock';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore'
import db from '../Services/Firebase/Firebase';


const ItemListContainer = ({greeting})=>{

    const [products, setProducts] = useState ([])
    const [loading, setLoading ] = useState (true)

    const { categoryId } = useParams()

    useEffect(()=>{
        setLoading(true)
        
        const collectionRef = categoryId
            ? query (collection(db, "baterias"), where("category", "==", categoryId))
            : collection(db, "baterias")

        getDocs (collectionRef)
            .then(response =>{
                const productsAdapted = response.docs.map(doc =>{
                    const data = doc.data()
                    return{id: doc.id, ...data}
                })
                console.log('Datos obtenidos de Firebase:', productsAdapted); 
                setProducts(productsAdapted)
            })
            .catch(error=>{
                console.log(error)
            })
            .finally(()=>{
                setLoading(false)
            })
        }, [categoryId])
    
    return (
        <div className="container">
            <h1 className='greeting text-center' >{greeting}</h1>

            <ItemList products={products} />

        </div>
    )
}

export default ItemListContainer    