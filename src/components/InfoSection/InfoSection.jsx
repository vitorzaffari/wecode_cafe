import NewsCard from '../NewsCard/NewsCard'
import './InfoSection.scss'
import Arrow from '../svg-components/Arrow'
import { useRef, useState } from 'react'
const InfoSection = () => {
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

  const data = [
    {
      id: 0,
      img: '/images/noticia1.png',
      title: 'Café corta o efeito da creatina? Entenda como tomar!',
      info: 'Uma dúvida recorrente das pessoas que treinam e/ou fazem musculação é: “Será que o café corta o efeito da...',
    },
    {
      id: 1,
      img: '/images/noticia2.png',
      title: 'Cardápio de cafeteria: Saiba como montar e o que oferecer!',
      info: 'Abrir uma cafeteria é uma ótima oportunidade para aproveitar o alto potencial de lucratividade desse...',
    },
    {
      id: 2,
      img: '/images/noticia3.png',
      title: 'Como fazer pudim de café com ou sem forno: Aprendam aqui!',
      info: 'Além de ser o queridinho do brasileiro no dia a dia, o café um ingrediente muito versátil para diversas receitas doces...',
    },
    {
      id: 3,
      img: '/images/noticia4.png',
      title: 'Café Arábica: saiba o que é e quais as diferenças do grão',
      info: 'O Café Arábica é uma das duas principais espécies de café cultivadas comercialmente em todo o mundo, sendo a outra ...',
    },
  ]



  return (
    <section className='info-section'>
      <div className="top">
        <h2>Conheça mais</h2>
        <p>Fique por dentro de tudo que acontece no universo cafeeiro</p>
      </div>
      <div className="middle">
        <div className="slider-wrap" ref={sliderRef}>

          {data.map(item => (
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

export default InfoSection