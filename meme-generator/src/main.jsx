import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Navbar from './components/Navbar';
import Input from './components/Input';
import Display from './components/Display';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Input />
    <Display />
    <Footer />
    {/* <App /> */}
  </React.StrictMode>,
)
