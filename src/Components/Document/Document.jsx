import { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const Document = () => {
    const [id] = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const oneItem = doc(db, "cafe", `${id}`)

        getDoc(oneItem).then((snapshot) => {
            if (snapshot.exists()) {
                const doc = snapshot.data()
                setProduct(doc)
            }
        })
    }, [])

    return (
        <div>
            <h1>Producto</h1>
            {
                <div>
                <h4>Producto : {product.nombre}</h4>
                <p>Categoria: {product.categoria}</p>
                <p>Precio $: {product.precio}</p>
                </div>
            }
        </div>
    )
}

export default Document
