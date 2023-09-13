import { useEffect, useRef, useState } from 'react'
import './HeroSlider.scss'

const HeroSlider = () => {
    const [isDragging, setIsDragging] = useState(false)
    const [startPosition, setStartPosition] = useState({ x: 0, y: 0 })
    const [currentSlide, setCurrentSlide] = useState(0)
    const [clientX, setClientX] = useState(0)
    const [fixedPosition, setFixedPosition] = useState({ x: 0, y: 0 })
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const sliderRef = useRef()

    function handlePress(e) {
        e.preventDefault()
        setIsDragging(true);
        if (e.type === 'mousedown') {
            setStartPosition(({
                y: e.clientY,
                x: e.clientX
            }))
            setFixedPosition(({
                y: e.clientY,
                x: e.clientX
            }))
            setClientX(e.clientX)  /* É necessário criar clientX no mousedown/touchstart e atualizar no mousemove/touchmove pois no android 'touchend' não retorna um array com o valor de clientX, deixando impossível fazer os cálculos para a funcionalidade de arastar do slider.  */
        } else if (e.type === 'touchstart') {
            setStartPosition({
                y: e.touches[0].clientY,
                x: e.touches[0].clientX
            })
            setFixedPosition({
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
        // disableScroll()

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

        const dragDistance = clientX - startPosition.x;

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


        const newPositionX = clientX
        // const newPositionY = clientY
        // const movementX = startPosition.x - newPositionX;


        let distance = (dragDistance / sliderRef.current.clientWidth * 100)
        if (Math.abs(clientY - fixedPosition.y) - Math.abs(clientX - fixedPosition.x) < 0) {
            disableScroll()
            distance < 0
                ? sliderRef.current.style.transform = `translateX(${distance}%)`
                : sliderRef.current.style.transform = `translateX(${distance - 100}%)`
        }


    }


    function handleUp(e) {
        if (!isDragging) return;
        setIsDragging(false);
        sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;

        sliderRef.current.style.transition = '300ms ease';

        const dragDistance = (clientX - startPosition.x);

        if (dragDistance >= 0 && currentSlide === 0) {
            return
        } else if (dragDistance < 0 && currentSlide === 1) {
            return
        }

        if (Math.abs(dragDistance) > sliderRef.current.clientWidth / 7) {
            setCurrentSlide(currentSlide === 0 ? 1 : 0);
        }
        enableScroll()
    }



    useEffect(() => {
        sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }, [startPosition, currentSlide])

    function disableScroll() {
        // Calculate the current scroll position
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        // Save the current scroll position as data attributes on the body element
        document.body.setAttribute('data-scroll-top', scrollTop);
        document.body.setAttribute('data-scroll-left', scrollLeft);

        // Set the body to have hidden overflow to prevent scrolling
        document.body.style.overflow = 'hidden';
    }
    function enableScroll() {
        // Retrieve the saved scroll position
        if (document.body.style.overflow = '') {

            const scrollTop = parseFloat(document.body.getAttribute('data-scroll-top')) || 0;
            const scrollLeft = parseFloat(document.body.getAttribute('data-scroll-left')) || 0;

            // Restore the body's overflow property and scroll to the saved position
            document.body.style.overflow = '';
            window.scrollTo(scrollLeft, scrollTop);
        }
    }


    return (
        <div className='hero-slider'>
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