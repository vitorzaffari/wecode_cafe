import NewsCard from '../Cards/ArtigoCard/ArtigoCard'
import './ConhecaMais.scss'
import Arrow from '../svg-components/Arrow'
import { useRef, useState } from 'react'
import { artigos } from '../../data/data'

const ConhecaMais = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef()

  function handleClick(n) {
    if (n === 0) {
      sliderRef.current.style.transform = `translate(0%)`
      setCurrentSlide(0)
    } else {
      sliderRef.current.style.transform = `translate(-100%)`
      setCurrentSlide(1)

    }

  }




  return (
    <section className='info-section'>
      <div className="top">
        <h2>Conheça mais</h2>
        <p>Fique por dentro de tudo que acontece no universo cafeeiro</p>
      </div>
      <div className="middle">
        <div className="slider-wrap" ref={sliderRef}>

          {artigos.map(item => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>

      </div>
      <div className="bottom">
        <div className="dots-wrap">
          <span className={`dot ${currentSlide === 0 ? 'active' : ''}`} onClick={() => handleClick(0)}></span>
          <span className={`dot ${currentSlide === 1 ? 'active' : ''}`} onClick={() => handleClick(1)}></span>
        </div>
        <div className="arrows-wrap">
          <button className={` btn arrow-left ${currentSlide === 0 ? 'disabled' : ''}`} onClick={() => handleClick(0)}>
            <Arrow width={16} height={16}  />
          </button>
          <button className={` btn arrow-right ${currentSlide === 1 ? 'disabled' : ''}`} onClick={() => handleClick(1)}>
            <Arrow width={16} height={16}  />
          </button>
        </div>
      </div>
    </section>
  )
}

export default ConhecaMais