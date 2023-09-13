import './Navbar.scss'
import MenuIcon from '../svg-components/MenuIcon'
import Search from '../svg-components/Search'
import WecodeLogo from '../svg-components/WecodeLogo'
import Avatar from '../svg-components/Avatar'
import Bag from '../svg-components/Bag'
import { useContext, useEffect, useRef, useState } from 'react'
import Menu from '../Menu/Menu'
import { CartContext } from '../../context/CartContext'
import Cart from '../Cart/Cart'

const Navbar = () => {
  const { cart } = useContext(CartContext)
  const [color, setColor] = useState('#fff')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const navRef = useRef()
  const menuRef = useRef()
  const cartRef = useRef()

  function handleMenu() {

    isMenuOpen === true
      ? menuRef.current.style.transform = `translateX(-100%)`
      : menuRef.current.style.transform = `translateX(0%)`

    setIsMenuOpen(prev => !prev)
  }
  function handleCart() {
    const cartHeight = cartRef.current.scrollHeight;
    if (isCartOpen) {
      cartRef.current.style.maxHeight = '0px'
    } else {
      cartRef.current.style.maxHeight = `${cartHeight}px`
    }
    setIsCartOpen(!isCartOpen)
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
      if (menuRef.current && (!menuRef.current.contains(e.target) && e.target.id !== 'menu')) {
        setIsMenuOpen(false)
        menuRef.current.style.transform = `translateX(-100%)`

      }
    }

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    } else {
      document.removeEventListener('click', handleClickOutside)

    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }

  }, [isMenuOpen])

  useEffect(() => {
    if (isCartOpen) {
      const cartHeight = cartRef.current.scrollHeight;
      cartRef.current.style.maxHeight = `${cartHeight}px`;
    }
  }, [cart])

  return (
    <>
      <nav ref={navRef} className='navbar' >
        <div className="left">
          <button className='btn' onClick={handleMenu}>
            <MenuIcon fill={color} />
          </button>
          <Search fill={color} />
        </div>
        <div className="middle">
          <WecodeLogo fill={color} />
        </div>
        <div className="right">
          <Avatar fill={color} />
          <button className="btn bag-wrap" onClick={handleCart}>
            <Bag fill={color} />
            <span className='bag-qty'>{cart.length}</span>
          </button>
        </div>
        <Menu forwardedRef={menuRef} handleMenu={handleMenu} />
        <Cart forwardedRef={cartRef} isCartOpen={isCartOpen} />
      </nav>
    </>
  )
}

export default Navbar