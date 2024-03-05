import "./itemDetailContainer.scss"
import { useEffect, useState, useContext } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"   
import { useParams } from "react-router-dom"
import { getDoc, doc } from 'firebase/firestore'
import db from '../Services/Firebase/Firebase';


const ItemDetailContainer = ()=>{
    const [product, setProduct] = useState (null)
    const [loading, setLoading ] = useState (true)

    const { itemId } = useParams()

    useEffect(()=>{
        setLoading(true)

        const docRef = doc(db, "baterias", itemId)

        getDoc(docRef)
            .then(response =>{
                const data = response.data()
                const productAdapted = { id: response.id, ...data }
                setProduct(productAdapted)
            })
            .catch(error =>{
                console.log(error)
            })
        }, [itemId])



    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer