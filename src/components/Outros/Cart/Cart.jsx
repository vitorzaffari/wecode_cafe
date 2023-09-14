import { useContext } from 'react'
import './Cart.scss'
import { NavContext } from '../../../context/NavContext'
import { NotificationContext } from '../../../context/NotificationContext'



const Cart = ({ forwardedRef, isCartOpen, handleCart }) => {

    const { cart, addToCart, removeFromCart, totalPrice } = useContext(NavContext)
    const { displayMessage } = useContext(NotificationContext);

    function handleAddToCart(item) {
        addToCart(item)
        displayMessage('add', 'carrinho')
    }
    function handleRemoveFromCart(item) {
        removeFromCart(item)
        displayMessage('remove', 'carrinho')
    }
    

    return (
        <div className={`cart-container ${isCartOpen ? 'show' : ''}`} ref={forwardedRef}>
            <div className="top">
                {cart.length > 0
                    ? <h2>Seu carrinho</h2>
                    : <h2>Seu carrinho está vazio</h2>
                }
            </div>
            <div className="middle">
                {cart.map(item => (
                    <div className="cart-item" key={item.id}>
                        <div className="cart-img">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="cart-item-info">

                            <h3>{item.title}</h3>
                            <div>
                                <span>R${(item.price).toFixed(2)}</span>
                                <span className='cart-quantity'>x{item.quantity}</span>
                            </div>
                            <p>Preço total: <span className='final-price'>R${(item.price * item.quantity).toFixed(2)}</span></p>
                        </div>
                        <div className="cart-btns">
                            <button  onClick={() => handleAddToCart(item)}>+</button>
                            <button  id='cart' onClick={() => handleRemoveFromCart(item)}>-</button>
                        </div>
                    </div>
                ))}
            </div>
            {cart.length > 0 &&
                <div className="bottom">
                    <h2>Preço final: R${(totalPrice).toFixed(2)}</h2>
                    <button>Finalizar compra</button>
                </div>
            }
            <button className='close-cart' onClick={handleCart}>Fechar carrinho</button>
        </div>
    )
}

export default Cart