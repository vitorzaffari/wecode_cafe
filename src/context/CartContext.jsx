import { createContext, useEffect, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        const itemIndex = cart.findIndex(item => item.id === product.id)
        if(itemIndex !== -1){
            const updatedCart = [...cart]
            updatedCart[itemIndex]. quantity += 1;
            setCart(updatedCart)
            console.log(cart)
        } else {
            const updatedCart = [...cart, { ...product, quantity: 1}]
            setCart(updatedCart)
        }
    }

    return (
        <CartContext.Provider value={{ addToCart, cart }}>{children}</CartContext.Provider>
    )
}