import { useContext, useEffect, useRef, useState } from 'react'
import CoffeeCard from '../CoffeeCard/CoffeeCard'
import './Favorites.scss'
import { NotificationContext } from '../../context/NotificationContext'

const Favorites = () => {
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




  const data = [
    {
      id: 0,
      img: '/images/cafe-dev.png',
      title: 'Café Dev - 500ml',
      info: 'Rapadura, Floral, papaia, cítrico',
      price: 15.90,
      sale: 10,
    },
    {
      id: 1,
      img: '/images/cafe-designer.png',
      title: 'Café Designer - 500ml',
      info: 'Doce de leite, chocolate e nozes',
      price: 15.90,
      sale: 0,
    }
  ]


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

          {data.map(item => (
            <CoffeeCard key={item.id} {...item} displayMessage={displayMessage} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Favorites