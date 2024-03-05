/*import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const Collection = () => {
    const [products, setProducts] = useState([]);
    console.log(products)

    useEffect(() => {
        const db = getFirestore();

        const itemsCollection = collection(db, "baterias");
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
                        <h4>{p.name}</h4>
                        <p>{p.category}</p>
                        <p>${p.price}</p>
                    </div>
                ))
            }
        </>
    )
}

export default Collection
*/