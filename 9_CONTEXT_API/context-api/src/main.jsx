import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CounterProvider } from './context/CounterContext.jsx'
import { TitleColorProvider } from './context/TitleColorContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TitleColorProvider>
      <CounterProvider>
        <App />
      </CounterProvider>
    </TitleColorProvider>
  </React.StrictMode>,
)
