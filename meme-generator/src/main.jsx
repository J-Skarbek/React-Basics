import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar';
import Display from './components/Display';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <div>
    <Navbar />
    <Display />
    <Footer />
  </div>

  // </React.StrictMode>,
)
