import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Hero />
    {/* <App /> */}
  </React.StrictMode>,
)
