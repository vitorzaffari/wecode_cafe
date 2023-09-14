import { useState } from "react"

export default function useDrag(ref, translatePercent, setTranslatePercent ) {


    const [isDragging, setIsDragging] = useState(false)
    const [startPosition, setStartPosition] = useState({ x: 0, y: 0 })
    const [fixedPosition, setFixedPosition] = useState({ x: 0, y: 0 })


    function handlePress(e) {
        e.preventDefault()
        setIsDragging(true)
        
        if (e.type === 'mousedown') {
            setStartPosition(({
                y: e.clientY,
                x: e.clientX
            }))
            setFixedPosition(({
                y: e.clientY,
                x: e.clientX
            }))
        } else if (e.type === 'touchstart') {
            setStartPosition({
                y: e.touches[0].clientY,
                x: e.touches[0].clientX
            })
            setFixedPosition({
                y: e.touches[0].clientY,
                x: e.touches[0].clientX
            })
            e.preventDefault();
        }


        ref.current.style.transition = 'none'; //

    }

    function handleMove(e) {
        if (!isDragging) return;
        e.preventDefault()


        let clientX;
        let clientY;
        if (e.type === 'mousemove') {
            clientX = e.clientX
            clientY = e.clientY

        } else if (e.type === 'touchmove') {
            clientX = e.touches[0].clientX
            clientY = e.touches[0].clientY
        }


        const newPositionX = clientX
        const newPositionY = clientY
        const movementX = startPosition.x - newPositionX;


        const sliderWidth = ref.current.offsetWidth;
        const containerWidth = ref.current.parentElement.offsetWidth;

        const speed = 1.2

        if (sliderWidth < containerWidth) {  //Remove a opção de arrastar caso a largura da tela for maior que a largura do slider (maior que mobile), se remover, o container poderá ser movido para fora da tela.
            setTranslatePercent(0)
            return
        }

        const newTranslatePercent = translatePercent + (movementX) * speed

        if (newTranslatePercent < 0) {
            setTranslatePercent(0)
        }
        else if (newTranslatePercent > (sliderWidth - containerWidth)) {

            setTranslatePercent(sliderWidth - containerWidth)
        } else {
            if (Math.abs(startPosition.y - fixedPosition.y) - Math.abs(startPosition.x - fixedPosition.x) < 0) {
                setTranslatePercent(newTranslatePercent)
            }
        }


        setStartPosition(({ y: newPositionY, x: newPositionX }))

        ref.current.style.transition = '300ms ease-out'; //
    }

    function handleRelese() {
        setIsDragging(false)
    }
    

    return  {handleMove, handlePress, handleRelese}
}