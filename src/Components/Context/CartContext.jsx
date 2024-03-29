import { createContext, useState, useEffect } from "react"

const CartContext = createContext({
    itemsCart: [],
    quantity: 0,
    addItems: () => {},
    removeItem: () => {},
    clearCart: () => {}
})

export const CartProvider = ({ children }) => {
    const [itemsCart, setItemsCart] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [total, setTotal] = useState(0)

    const addItems = (items, quantityToAdd) => {
        const existingItemIndex = itemsCart.findIndex(item => item.id === items.id)
    
        if (existingItemIndex !== -1) {
            const updatedItemsCart = [...itemsCart]
            updatedItemsCart[existingItemIndex].quantity += quantityToAdd
            setItemsCart(updatedItemsCart)
        } else {
            setItemsCart([...itemsCart, { ...items, quantity: quantityToAdd }])
        }
    }

    const removeItem = (itemId) => {
        const newItemsCart = itemsCart.filter(item => item.id !== itemId);
        setItemsCart(newItemsCart)

        const totalQuantity = newItemsCart.reduce((total, currentItem) => total + currentItem.quantity, 0)
        setQuantity(totalQuantity)
    };
    
    const clearCart = () => {
        if (itemsCart.length > 0)
        setItemsCart([])
        setQuantity(0)
    }

    useEffect(() => {
        const totalQuantity = itemsCart.reduce((total, currentItem) => total + currentItem.quantity, 0)
        setQuantity(totalQuantity)
    }, [itemsCart])

    useEffect(() => {
        const total = itemsCart.reduce((total, item) => total + item.price * item.quantity, 0)
        setTotal(total)
    }, [itemsCart])

    return (
        <CartContext.Provider value={{ itemsCart, quantity, addItems, removeItem, clearCart, total }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext
