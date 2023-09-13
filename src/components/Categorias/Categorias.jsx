import { useEffect, useState, useRef } from 'react'
import './Categorias.scss'
import { categorias } from '../../data/data'
const Categorias = () => {
    const [isDragging, setIsDragging] = useState(false)
    const [startPosition, setStartPosition] = useState({ x: 0, y: 0 })
    const [translatePercent, setTranslatePercent] = useState(0)
    const [fixedPosition, setFixedPosition] = useState({ x: 0, y: 0 })

    const sliderRef = useRef()


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


        sliderRef.current.style.transition = 'none';

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


        const sliderWidth = sliderRef.current.offsetWidth;
        const containerWidth = sliderRef.current.parentElement.offsetWidth;

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

        sliderRef.current.style.transition = '300ms ease-out';
    }

    function handleUp() {
        setIsDragging(false)


    }
    useEffect(() => {
        sliderRef.current.style.transform = `translateX(${-translatePercent}px)`
    }, [translatePercent])


    return (
        <div className='options'
            onMouseDown={handlePress} onTouchStart={handlePress}
            onMouseMove={handleMove} onTouchMove={handleMove}
            onMouseUp={handleUp} onTouchEnd={handleUp}>
            <div className="options-wrap" ref={sliderRef}>

                {categorias.map(item => (
                    <div className={`option`} key={item.id} >
                        <img src={item.img} alt={item.title} />
                        <h3 className={` ${item.highlight ? 'highlight' : ''}`}>{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categorias