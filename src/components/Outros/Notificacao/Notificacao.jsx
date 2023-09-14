import { useContext, useEffect, useRef, useState } from 'react'
import './Notificacao.scss'
import { NotificationContext } from '../../../context/NotificationContext'

const Notificacao = () => {

  const [isActive, setIsActive] = useState(false)
  const { message } = useContext(NotificationContext)
  const divRef = useRef();

  useEffect(() => {
    if (message) {
      divRef.current.style.display = 'block';
      setIsActive(true)
      const timeoutId = setTimeout(() => {
        if (divRef.current) {
          setIsActive(false)
        }
      }, 3500);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [message])

  return (
    <div ref={divRef} className={`notification-box ${isActive ? 'active' : ''}`}><p>{message}</p></div>
  )
}

export default Notificacao