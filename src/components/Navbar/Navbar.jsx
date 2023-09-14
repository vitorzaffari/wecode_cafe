import './Navbar.scss'
import MenuIcon from '../svg-components/MenuIcon'
import Search from '../svg-components/Search'
import WecodeLogo from '../svg-components/WecodeLogo'
import Avatar from '../svg-components/Avatar'
import Bag from '../svg-components/Bag'
import Menu from '../Outros/Menu/Menu'
import Cart from '../Outros/Cart/Cart'
import Favorites from '../Outros/Favorites/Favorites'
import { useContext, useEffect, useRef, useState } from 'react'
import { NavContext } from '../../context/NavContext'

const Navbar = () => {
  const { cart, favorites } = useContext(NavContext)
  const [color, setColor] = useState('#fff')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isFavOpen, setIsFavOpen] = useState(false)

  const navRef = useRef()
  const menuRef = useRef()
  const cartRef = useRef()
  const favRef = useRef()



  function handleMenu() {// se esta aberto, fecha, e vice-versa

    if (isMenuOpen) {
      menuRef.current.style.transform = `translateX(-100%)`
    } else {
      setIsCartOpen(false)
      cartRef.current.style.maxHeight = '0px'
      setIsFavOpen(false)
      favRef.current.style.maxHeight = '0px'
      menuRef.current.style.transform = `translateX(0%)`
    }

    setIsMenuOpen(prev => !prev)
  }


  function handleCart() {// se esta aberto, fecha, e vice-versa, max-heigth é utilizado para animação dinâmica

    const cartHeight = cartRef.current.scrollHeight;
    if (isCartOpen) {
      setIsCartOpen(!isCartOpen)
      cartRef.current.style.maxHeight = '0px'
    } else {
      cartRef.current.style.maxHeight = `${cartHeight}px`
      setIsCartOpen(!isCartOpen)
      setIsFavOpen(false)
      favRef.current.style.maxHeight = '0px'

    }
  }

  function handleFav() {// se esta aberto, fecha, e vice-versa, max-heigth é utilizado para animação dinâmica

    const favHeight = favRef.current.scrollHeight;
    if (isFavOpen) {
      setIsFavOpen(!isFavOpen)
      favRef.current.style.maxHeight = '0px'
    } else {
      favRef.current.style.maxHeight = `${favHeight}px`
      setIsFavOpen(!isFavOpen)

    }
  }


  useEffect(() => { //muda a cor do navbar ao scroll

    function handleScroll() {
      if (window.scrollY > 0) {
        setColor("#333")
        navRef.current.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'
      } else {
        setColor("#fff")
        navRef.current.style.backgroundColor = 'transparent'

      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => { //ao clicar fora do menu aberto, fecha
    function handleClickOutside(e) {
      if (isMenuOpen) {
        if (menuRef.current && (!menuRef.current.contains(e.target) && e.target.id !== 'menu')) {
          setIsMenuOpen(false)
          menuRef.current.style.transform = `translateX(-100%)`
        }
      } else if (isCartOpen) {
        if (cartRef.current && (!cartRef.current.contains(e.target) && e.target.id !== 'cart')) {
          setIsCartOpen(false)
          cartRef.current.style.maxHeight = '0px'
        }
      } else if (isFavOpen) {
        if (favRef.current && (!favRef.current.contains(e.target) && e.target.id !== 'fav')) {
          setIsFavOpen(false)
          favRef.current.style.maxHeight = '0px'
        }
      }
    }

    if (isMenuOpen || isCartOpen || isFavOpen) {
      document.addEventListener('click', handleClickOutside)
    } else {
      document.removeEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }

  }, [isMenuOpen, isCartOpen, isFavOpen])

  useEffect(() => { // possibilita animação dinâmica do container ao utilizar js para obter a sua altura
    if (isCartOpen) {
      const cartHeight = cartRef.current.scrollHeight;
      cartRef.current.style.maxHeight = `${cartHeight}px`;

    }
  }, [cart, isCartOpen])

  useEffect(() => { // possibilita animação dinâmica do container ao utilizar js para obter a sua altura

    if (isFavOpen) {
      const favHeight = favRef.current.scrollHeight;
      favRef.current.style.maxHeight = `${favHeight}px`;

    }
  }, [favorites, isFavOpen])

  return (
    <>
      <nav ref={navRef} className='navbar' id='navbar'>
        <a href="#hero" className="skip-navigation link">Pular navegação</a>
        <div className="left">
          <button onClick={handleMenu} id='menu'>
            <MenuIcon fill={color} />
          </button>
          <Menu forwardedRef={menuRef} isMenuOpen={isMenuOpen} handleMenu={handleMenu} />
          <Search fill={color} />
        </div>
        <div className="middle">
          <a href="#hero" className='link logo'>
            <WecodeLogo fill={color} />
          </a>
        </div>
        <div className="right">
          <button id='fav' onClick={handleFav}>
            <Avatar fill={color} />
          </button>
          <Favorites forwardedRef={favRef} isFavOpen={isFavOpen} handleFav={handleFav} />
          <button className="bag-wrap" id='cart' onClick={handleCart} >
            <Bag fill={color} />
            <span className='bag-qty' id='cart'>{cart.length}</span>
          </button>
        </div>

        <Cart forwardedRef={cartRef} isCartOpen={isCartOpen} handleCart={handleCart} />
      </nav>
    </>
  )
}

export default Navbar