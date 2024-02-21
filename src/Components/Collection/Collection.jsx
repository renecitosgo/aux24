import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const Collection = () => {
    const [products, setProducts] = useState([]);
    console.log(products)

    useEffect(() => {
        const db = getFirestore();

        const itemsCollection = collection(db, "cafe");
        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data());
            setProducts(docs);
        })
    }, [])

    return (
        <>
            <h1>Productos</h1>
            {
                products.map((p) => (
                    <div>
                        <h4>{p.nombre}</h4>
                        <p>{p.categoria}</p>
                        <p>${p.precio}</p>
                    </div>
                ))
            }
        </>
    )
}

export default Collection
