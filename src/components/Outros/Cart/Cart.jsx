import { useContext } from 'react'
import './Cart.scss'
import { CartContext } from '../../../context/CartContext'
import { NotificationContext } from '../../../context/NotificationContext'



const Cart = ({ forwardedRef, isCartOpen }) => {

    const { cart, addToCart, removeFromCart, totalPrice } = useContext(CartContext)
    const { displayMessage } = useContext(NotificationContext);

    console.log(cart)

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
                            <button className='btn add' onClick={() => handleAddToCart(item)}>+</button>
                            <button className='btn remove' id='cart' onClick={() => handleRemoveFromCart(item)}>-</button>
                        </div>
                    </div>
                ))}
            </div>
            {cart.length > 0 &&
                <div className="bottom">
                    <h2>Preço final: R${(totalPrice).toFixed(2)}</h2>
                    <button className='btn'>Finalizar compra</button>
                </div>
            }
        </div>
    )
}

export default Cart