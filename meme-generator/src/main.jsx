import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar';
import { Input } from './components/Input';
import Display from './components/Display';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Input />
    <Display />
    <Footer />
  </React.StrictMode>,
)
