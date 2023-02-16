import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Header from './components/header';
import Content from './components/content';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Content />
    {/* <App /> */}
  </React.StrictMode>,
)
