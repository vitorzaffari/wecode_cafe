import { useContext, useEffect, useRef, useState } from 'react'
import CoffeeCard from '../Cards/CoffeeCard/CoffeeCard'
import './FavoritosDaCasa.scss'
import { NotificationContext } from '../../context/NotificationContext'
import { favoritos } from '../../data/data'
import useDrag from '../../utils/useDrag'

const FavoritosDaCasa = () => {
  const [translatePercent, setTranslatePercent] = useState(0)
  const { displayMessage } = useContext(NotificationContext);
  const sliderRef = useRef()
  const { handleMove, handlePress, handleUp } = useDrag(sliderRef, translatePercent, setTranslatePercent)



  useEffect(() => {
    sliderRef.current.style.transform = `translateX(${-translatePercent}px)`
  }, [translatePercent])



  return (
    <div className='favorites' id='favorites'>
      <div id="fav-placeholder"></div>
      <div className="top">
        <h2>Os favoritos da casa</h2>
        <p>Conheça os cafés queridinhos da galera!</p>
      </div>
      <div className="bottom" onMouseDown={handlePress} onTouchStart={handlePress}
        onMouseMove={handleMove} onTouchMove={handleMove}
        onMouseUp={handleUp} onTouchEnd={handleUp}>
        <div className="slider-wrap" ref={sliderRef}>

          {favoritos.map(item => (
            <CoffeeCard key={item.id} {...item} displayMessage={displayMessage} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default FavoritosDaCasa