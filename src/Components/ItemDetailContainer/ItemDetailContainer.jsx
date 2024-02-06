import "./itemDetailContainer.scss"
import { useEffect, useState } from "react"
import { getProductById } from "../ServerMock/ProductMock"
import ItemDetail from "../ItemDetail/ItemDetail"   
import { useParams } from "react-router-dom"

const ItemDetailContainer = ()=>{
    const [product, setProduct] = useState (null)

    const { itemId } = useParams()

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