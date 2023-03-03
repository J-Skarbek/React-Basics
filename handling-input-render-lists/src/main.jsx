import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import Application from './components/Application'
import Overview from './components/Overview'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Overview />
    <Application />
    {/* <App /> */}
  </React.StrictMode>,
)
