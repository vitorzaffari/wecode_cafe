import { useEffect, useState, useRef } from 'react'
import './Categorias.scss'
import { categorias } from '../../data/data'
import useDrag from '../../utils/useDrag'



const Categorias = () => {

    const sliderRef = useRef()
    const [translatePercent, setTranslatePercent] = useState(0)
    const { handleMove, handlePress, handleRelese } = useDrag(sliderRef, translatePercent, setTranslatePercent) // essas funções são responsáveis pelo scroll

    useEffect(() => {
        sliderRef.current.style.transform = `translateX(${-translatePercent}px)`
    }, [translatePercent])


    return (
        <div className='options'
            onMouseDown={handlePress} onTouchStart={handlePress}
            onMouseMove={handleMove} onTouchMove={handleMove}
            onMouseUp={handleRelese} onTouchEnd={handleRelese}>
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