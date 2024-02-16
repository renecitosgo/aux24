import "./itemDetailContainer.scss"
import { useEffect, useState, useContext } from "react"
import { getProductById } from "../ServerMock/ProductMock"
import ItemDetail from "../ItemDetail/ItemDetail"   
import { useParams } from "react-router-dom"
import CartContext from "../Context/CartContext"


const ItemDetailContainer = ()=>{
    const cartState = useContext(CartContext)
    const { itemId } = useParams()    
    const [product, setProduct] = useState (null)

    

    console.log('itemId:', itemId);

    useEffect(()=>{
        getProductById(Number(itemId))
            .then(response =>{
                setProduct(response)
                console.log('Product:', response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    console.log('Product state:', product) 

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer