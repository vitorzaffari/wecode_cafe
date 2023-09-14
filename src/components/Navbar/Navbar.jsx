import './Navbar.scss'
import MenuIcon from '../svg-components/MenuIcon'
import Search from '../svg-components/Search'
import WecodeLogo from '../svg-components/WecodeLogo'
import Avatar from '../svg-components/Avatar'
import Bag from '../svg-components/Bag'
import Menu from '../Outros/Menu/Menu'
import Cart from '../Outros/Cart/Cart'
import { useContext, useEffect, useRef, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const Navbar = () => {
  const { cart } = useContext(CartContext)
  const [color, setColor] = useState('#fff')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const navRef = useRef()
  const menuRef = useRef()
  const cartRef = useRef()



  function handleMenu() {

    if (isMenuOpen) {
      menuRef.current.style.transform = `translateX(-100%)`
    } else {
      setIsCartOpen(false)
      cartRef.current.style.maxHeight = '0px'
      menuRef.current.style.transform = `translateX(0%)`
    }

    menuRef.current.focus()
    setIsMenuOpen(prev => !prev)
  }

  function handleCart(e) {
    console.log(e.target)
    const cartHeight = cartRef.current.scrollHeight;
    console.log(cartHeight)
    if (isCartOpen) {
      setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen)
      cartRef.current.style.maxHeight = '0px'
    } else {
      cartRef.current.style.maxHeight = `${cartHeight}px`
      setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen)
    }
  }



  useEffect(() => {

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

  useEffect(() => {
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
      }
    }

    if (isMenuOpen || isCartOpen) {
      document.addEventListener('click', handleClickOutside)
    } else {
      document.removeEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }

  }, [isMenuOpen, isCartOpen])

  useEffect(() => {
    if (isCartOpen) {
      const cartHeight = cartRef.current.scrollHeight;
      cartRef.current.style.maxHeight = `${cartHeight}px`;

    }
  }, [cart, isCartOpen])

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
          <a href="#" className='link logo'>
            <WecodeLogo fill={color} />
          </a>
        </div>
        <div className="right">
          <Avatar fill={color} />
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