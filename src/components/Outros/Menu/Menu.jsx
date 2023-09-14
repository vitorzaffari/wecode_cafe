import WecodeLogo from '../../svg-components/WecodeLogo'
import CloseMenu from '../../svg-components/CloseMenu'
import Arrow from '../../svg-components/Arrow'
import './Menu.scss'
import { useState } from 'react'

const Menu = ({ forwardedRef, handleMenu, isMenuOpen }) => {
    const [specialsOpen, setSpecialsOpen] = useState(false)

    function handleToggle() {
        setSpecialsOpen(!specialsOpen)
    }

    return (
        <div className={`menu ${isMenuOpen ? 'visible' : ''}`} ref={forwardedRef}>
            <div className="top">
                <div className="logo-wrap">
                    <WecodeLogo />
                    <button onClick={handleMenu}>
                        <CloseMenu />
                    </button>
                </div>
                <div className="menu-img">
                    <img src="/images/menu-img.png" alt="" />
                    <div className="img-info">
                        <h3>Café Gamer</h3>
                        <p>Perfeito para aquela madrugada de lançamento de jogo novo</p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="menu-info">
                    <div className="header-wrap">
                        <h3>Cafés especiais</h3>
                        <button onClick={handleToggle} className='menu-arrow'>
                            <Arrow csName={specialsOpen ? 'arrowUp' : ''} />
                        </button>

                    </div>
                    <div className={`menu-links ${specialsOpen ? 'active' : ''}`}>
                        <a href="#" className="link">Café Cyborg</a>
                        <a href="#" className="link">Café Star Wars</a>
                        <a href="#" className="link">Café Dark Elf</a>
                        <a href="#" className="link">Ver Todos</a>
                    </div>
                </div>

                <div className="header-wrap">
                    <h3>Cafés tradicionais</h3>
                        <Arrow fill='#ccc'/>
                </div>
                <div className="header-wrap">
                    <h3>Kits</h3>
                        <Arrow fill='#ccc'/>

                </div>
                <div className="header-wrap">
                    <a href='#' className='link'>
                        <h3 className='highlight'>Wecoffee Club+</h3>
                    </a>
                </div>

            </div>
            <button className="close-menu" onClick={handleMenu}>Fechar menu</button>
        </div>
    )
}

export default Menu