import { useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { Collections } from '@mui/icons-material'

const Form = () => {
    const [OrderId, setOrderId] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()

        const ordersCollection = collection(db, "orden")
        const order ={
            buyer:{
                name,
                email                
            }
            "Aqui deberían ir los items elegidos por el comprador que ya estarían en mi cartContext????"
        }

 
        addDoc(ordersCollection, order).then(({id})=>{
            setOrderId(id)
        }) 
    }

    return (
        <>
        <h2>Enviando ordenes</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
            <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
            <button type="submit">Send</button>
        </form>
        <h3>Order Id: { OrderId }</h3>
        </>
    )
}

export default Form;
