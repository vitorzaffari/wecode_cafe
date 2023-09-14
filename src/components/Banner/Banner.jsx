import { useEffect, useRef, useState } from 'react'
import './Banner.scss'
import useScroll from '../../utils/useScroll'

const HeroSlider = () => {
    const { disableScroll, enableScroll } = useScroll()
    const [isDragging, setIsDragging] = useState(false)
    const [startPosition, setStartPosition] = useState({ x: 0, y: 0 })
    const [currentSlide, setCurrentSlide] = useState(0)
    const [clientX, setClientX] = useState(0)
    
    const distanceModifier = 7; // quanto maior, menos deslize deve ser feito para trocar o slide. escolhi 7 por parecer mais natural no touchscreen

    const sliderRef = useRef()

    function handlePress(e) {
        e.preventDefault()
        setIsDragging(true);
        if (e.type === 'mousedown') {
            setStartPosition(({
                y: e.clientY,
                x: e.clientX
            }))
            setClientX(e.clientX)
        } else if (e.type === 'touchstart') { //os s eventos de mouse não funcionam da mesma forma em dispositivos touchscreen, como celulares e tablets, em comparação com dispositivos que usam um cursor de mouse tradicional
            setStartPosition({
                y: e.touches[0].clientY,
                x: e.touches[0].clientX
            })
            setClientX(e.touches[0].clientX)
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

            setClientX(clientX) 
        } else if (e.type === 'touchmove') {
            clientX = e.touches[0].clientX
            clientY = e.touches[0].clientY
            setClientX(clientX)

        }

        const dragDistance = clientX - startPosition.x; //distância do deslize

        //este bloco coloca limites, impedindo o scroll para fora
        if (currentSlide === 0) {
            if (dragDistance >= 0 && currentSlide === 0) {
                return
            }
        }
        if (currentSlide === 1) {
            if (dragDistance <= 0 && currentSlide === 1) {
                return
            }
        }

        //divide a distância pelo tamanho do container para obter a porcentagem
        let distance = (dragDistance / sliderRef.current.clientWidth * 100)
        

        //este if serve para melhorar a experiência do usuario no celular (testado em android), sem este cálculo, se o usuário deslizar para baixo, os sliders que envolvem deslize horizontal também se movem (um pouco).
        if (Math.abs(clientY - startPosition.y) - Math.abs(clientX - startPosition.x) < 0) {

            disableScroll() //também feito para melhorar a ux no celular, caso o scroll seja horizontal, é travado o scroll vertical. (testando no  celular sem desabilitar o scroll vertical a transição fica ruim)

            distance < 0
                ? sliderRef.current.style.transform = `translateX(${distance}%)`
                : sliderRef.current.style.transform = `translateX(${distance - 100}%)`

        }

        sliderRef.current.style.transition = 'none';

    }


    function handleUp() {
        if (!isDragging) return;
        setIsDragging(false);

        sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
        sliderRef.current.style.transition = '300ms ease';

        const dragDistance = (clientX - startPosition.x);


        //este bloco é feito para o snap, já existem limites, mas este código força ao usuário deslizar para o lado correto. (se estiver no primeiro slide, deslizar para a direita não trocará para o segundo slide e vice-versa)
        if (dragDistance >= 0 && currentSlide === 0) {
            return
        } else if (dragDistance < 0 && currentSlide === 1) {
            return
        }

        if (Math.abs(dragDistance) > sliderRef.current.clientWidth / distanceModifier) {
            setCurrentSlide(currentSlide === 0 ? 1 : 0);
        }
        //ao soltar a tela é permitido o scroll vertical
        enableScroll()
    }



    useEffect(() => {
        sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }, [startPosition, currentSlide])

    return (
        <div className='hero-slider' id='hero'>
            <div ref={sliderRef} className="hero-container"
                onMouseDown={handlePress} onTouchStart={handlePress}
                onMouseMove={handleMove} onTouchMove={handleMove}
                onMouseUp={handleUp} onTouchEnd={handleUp}
            >
                <div className='img-wrap'>
                    <img src="/images/Banner01.png" alt="Lançamento café dev" />
                </div>
                <div className='img-wrap'>
                    <img src="/images/Banner02.png" alt="Lançamento café designer" />

                </div>
            </div>
            <div className="info-wrap">

                <div className="slider-dots">
                    <span className={`dot ${currentSlide === 0 ? 'active' : ''}`} id='0' onClick={e => setCurrentSlide(parseInt(e.target.id))}></span>
                    <span className={`dot ${currentSlide === 1 ? 'active' : ''}`} id='1' onClick={e => setCurrentSlide(parseInt(e.target.id))}></span>
                </div>
                <a className='sobre-link link' href="#fav-placeholder">Veja mais</a>
            </div>
        </div>
    )
}

export default HeroSlider