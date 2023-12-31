import { useContext, useEffect, useState } from 'react'
import AddBag from '../../svg-components/AddBag'
import FavoriteIcon from '../../svg-components/FavoriteIcon'
import './CoffeeCard.scss'
import { NavContext } from '../../../context/NavContext'


const CoffeeCard = ({ id, title, img, info, price, sale, displayMessage }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const { addToCart, addToFavorites, favorites } = useContext(NavContext)


  function handleFavorite() {
    addToFavorites({ id, title, img, info, price })

    isFavorite
      ? displayMessage('remove', 'favorite')
      : displayMessage('add', 'favorite')
    setIsFavorite(!isFavorite)
  }


  function handleAddToCard() {
    addToCart({ id, title, img, price })
    displayMessage('add', 'carrinho')
  }

  useEffect(() => { //remove o preenchimento do icone de favorito caso seja removido pelo tab de favoritos
    const index = favorites.findIndex(item => item.id === id)
    index === -1 ? setIsFavorite(false) : ''
  }, [favorites])


  return (
    <div className='coffee-card'>
      <div className="card-top">
        <img src={img} alt={title} />
        <button className='fav-icon' id='fav' onClick={handleFavorite}>
          <FavoriteIcon width={24} height={24} isFavorite={isFavorite} />
        </button>
        <button className='add-bag' id='cart' onClick={handleAddToCard}>
          <AddBag fill='#0D98E6' />
        </button>
      </div>
      <div className="card-bottom">
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