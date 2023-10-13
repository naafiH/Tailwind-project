import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import Header from './components/header/header'
import Home from './components/home/home'
import Analytics from './components/analytics/analytics'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Home/>
    <Analytics/>
  </React.StrictMode>,
)
