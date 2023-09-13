import { useContext, useEffect, useState } from 'react'
import AddBag from '../svg-components/AddBag'
import FavoriteIcon from '../svg-components/FavoriteIcon'
import './CoffeeCard.scss'
import { CartContext } from '../../context/CartContext'


const CoffeeCard = ({ id, title, img, info, price, sale, displayMessage } ) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const { addToCart } = useContext(CartContext)
  function handleFavorite() {
    isFavorite
    ? displayMessage('remove', 'favorite')
    : displayMessage('add', 'favorite')
    setIsFavorite(!isFavorite)
    
  }

  function handleAddToCard() {

    addToCart({ id, title, img, price })
    displayMessage('add', 'carrinho')
  }

  return (
    <div className='coffee-card'>
      <div className="top">
        <img src={img} alt={title} />
        <button className='btn fav-icon' onClick={handleFavorite}>
          <FavoriteIcon width={24} height={24} isFavorite={isFavorite} />
        </button>
        <button className='btn add-bag' onClick={handleAddToCard}>
          <AddBag fill='#0D98E6' />
        </button>
      </div>
      <div className="bottom">
        <h3 className='title'>{title}</h3>
        <p className='info'>{info}</p>
        <div className="prices">

          <span className='price'>R${(price).toFixed(2)} </span>
          {sale > 0 &&
            <>
              <span className='off'>{sale}% OFF</span>
              <span className='old-price'>R${(price + price * (sale / 100)).toFixed(2)}</span>
            </>
          }
        </div>
      </div>

    </div>
  )
}

export default CoffeeCard