import { useContext } from 'react'
import './Favorites.scss'
import { NavContext } from '../../../context/NavContext'
import { NotificationContext } from '../../../context/NotificationContext'

const Favorites = ({ forwardedRef, isFavOpen, handleFav }) => {

  const { favorites, addToFavorites } = useContext(NavContext)
  const { displayMessage } = useContext(NotificationContext)


  function handleAdd(item) {
    addToFavorites(item)
    displayMessage('remove', 'favorites')
  }

  
  return (

    <div ref={forwardedRef} className={`nav-favorites ${isFavOpen ? 'show' : ''}`}>
      <h2>Seus favoritos</h2>
      <div className="fav-wrap">

        {favorites.map(item => (
          <div className="fav-item" key={item.id}>
            <div className="fav-img">
              <img src={item.img} alt="" />
            </div>
            <div className="fav-item-info">
              <h3>{item.title}</h3>
              <p>{item.info}</p>
              <div>
                <span>R${(item.price).toFixed(2)}</span>
              </div>
            </div>
            <button id='fav' className='remove-fav' onClick={() => handleAdd(item)}>Remover</button>
          </div>
        ))}
      </div>
      <button className='close-fav' onClick={handleFav}>Fechar favoritos</button>

    </div>
  )
}

export default Favorites