import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { NavProvider } from './context/NavContext.jsx'
import { NotificationProvider } from './context/NotificationContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavProvider>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </NavProvider>
  </React.StrictMode>
)
