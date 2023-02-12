import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import SectionBreak from './components/SectionBreak';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Hero />
    <SectionBreak />
    {/* <App /> */}
  </React.StrictMode>,
)
