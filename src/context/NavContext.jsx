import { createContext, useEffect, useState } from "react";


export const NavContext = createContext()

export const NavProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [favorites, setFavorites] = useState([])

    const addToCart = (product) => {
        const itemIndex = cart.findIndex(item => item.id === product.id)
        if (itemIndex !== -1) {
            const updatedCart = [...cart]
            updatedCart[itemIndex].quantity += 1;
            setCart(updatedCart)
        } else {
            const updatedCart = [...cart, { ...product, quantity: 1 }]
            setCart(updatedCart)
        }

    }
    const removeFromCart = (product) => {
        const itemIndex = cart.findIndex(item => item.id === product.id)
        if (itemIndex !== -1) {
            const updatedCart = [...cart]
            updatedCart[itemIndex].quantity -= 1;
            if (updatedCart[itemIndex].quantity === 0) {
                setCart(updatedCart.filter(item => item.id !== updatedCart[itemIndex].id))
            } else {

                setCart(updatedCart)
            }
        }
    }

    const addToFavorites = (product) => {
        const itemIndex = favorites.findIndex(item => item.id === product.id)
        if (itemIndex !== -1) { //se existir remove
            const updatedFavorites = [...favorites];
            updatedFavorites.splice(itemIndex, 1);
            setFavorites(updatedFavorites);
        } else {
            const updatedFav = [...favorites, { ...product, fav:true }]
            setFavorites(updatedFav)
        }
    }



    useEffect(() => {

        let newTotalPrice = 0;
        for (const item of cart) {
            newTotalPrice += item.price * item.quantity;
        }

        setTotalPrice(newTotalPrice)
    }, [cart, favorites])

    return (
        <NavContext.Provider value={{ addToCart, removeFromCart, addToFavorites, favorites, cart, totalPrice }}>{children}</NavContext.Provider>
    )
}