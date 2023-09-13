import { useEffect, useState } from "react"


function useNotification() {
    const [message, setMessage] = useState('')

    useEffect(() => {
        let timeoutId;

        if (message) {
            timeoutId = setTimeout(() => {
                setMessage('');
            }, 3000);
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
    return [message, displayMessage]
}

export default useNotification;