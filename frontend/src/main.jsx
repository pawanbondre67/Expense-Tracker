import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalProvider from './context/GlobalContext.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <GlobalProvider>
    <App />
    </GlobalProvider>
  </React.StrictMode>,
)
