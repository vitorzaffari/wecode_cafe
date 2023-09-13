import { createContext, useEffect, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

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
    const removeFromCart = (product) => {
        const itemIndex = cart.findIndex(item => item.id === product.id)
        if(itemIndex !== -1){
            const updatedCart = [...cart]
            updatedCart[itemIndex]. quantity -= 1;
            if(updatedCart[itemIndex]. quantity === 0){
                setCart(updatedCart.filter(item => item.id !== updatedCart[itemIndex].id))
            } else{

                setCart(updatedCart)
            }
            console.log('removed: ', cart)
        } 
    }

    useEffect(() => {
        let newTotalPrice = 0;
        for(const item of cart){
            newTotalPrice += item.price * item.quantity;
        }

        setTotalPrice(newTotalPrice)
    }, [cart])

    return (
        <CartContext.Provider value={{ addToCart, removeFromCart, cart, totalPrice }}>{children}</CartContext.Provider>
    )
}