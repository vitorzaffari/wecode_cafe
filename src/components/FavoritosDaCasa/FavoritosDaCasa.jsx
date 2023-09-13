import { useContext, useEffect, useRef, useState } from 'react'
import CoffeeCard from '../Cards/CoffeeCard/CoffeeCard'
import './FavoritosDaCasa.scss'
import { NotificationContext } from '../../context/NotificationContext'
import { favoritos } from '../../data/data'

const FavoritosDaCasa = () => {
  const [isDragging, setIsDragging] = useState(false)
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 })
  const [translatePercent, setTranslatePercent] = useState(0)
  const { displayMessage } = useContext(NotificationContext);
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

    if(sliderWidth < containerWidth) {    //Remove a opção de arrastar caso a largura da tela for maior que a largura do slider (maior que mobile), se remover, o container poderá ser movido para fora da tela.
      setTranslatePercent(0)
      return
      
    }

    const speed = 1.2

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