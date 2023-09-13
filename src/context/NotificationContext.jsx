import { createContext, useEffect, useState } from "react";


export const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {

    const [message, setMessage] = useState('')

    useEffect(() => {
        let timeoutId;
        if (message) {
            timeoutId = setTimeout(() => {
                setMessage('');
            }, 4000);
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
        }
    }, [message])

    const displayMessage = (action, place) => {

        if (action === 'add') {
            setMessage(`Adicionado ${place === 'carrinho' ? 'ao carrinho' : 'aos favoritos'}`)
        } else {
            setMessage(`Removido ${place === 'carrinho' ? 'do carrinho' : 'dos favoritos'}`)
        }

    }


    return (
        <NotificationContext.Provider value={{ message, displayMessage }}>{children}</NotificationContext.Provider>
    )
}