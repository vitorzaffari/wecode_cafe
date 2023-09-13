import WecodeLogo from '../../svg-components/WecodeLogo'
import CloseMenu from '../../svg-components/CloseMenu'
import Arrow from '../../svg-components/Arrow'
import './Menu.scss'

const Menu = ({ forwardedRef, handleMenu }) => {
    return (
        <div className='menu' ref={forwardedRef}>
            <div className="top">
                <div className="logo-wrap">
                    <WecodeLogo />
                    <button className='btn' onClick={handleMenu}>
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
                        <button className='btn'>
                            <Arrow />
                        </button>

                    </div>
                    <div className="menu-links">
                        <a href="#" className="link">Café Cyborg</a>
                        <a href="#" className="link">Café Star Wars</a>
                        <a href="#" className="link">Café Dark Elf</a>
                        <a href="#" className="link">Ver Todos</a>
                    </div>
                </div>

                <div className="header-wrap">
                    <h3>Cafés tradicionais</h3>
                    <Arrow />
                </div>
                <div className="header-wrap">
                    <h3>Kits</h3>
                    <Arrow />

                </div>
                <div className="header-wrap">
                    <h3 className='highlight'>Wecoffee Club+</h3>
                </div>

            </div>
        </div>
    )
}

export default Menu