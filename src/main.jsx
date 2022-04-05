import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'


ReactDOM.render(
  <React.StrictMode>
    <div style={{backgroundImage: 'url("http://pa1.narvii.com/8010/28a302515f1c95ea32ac8571c6ac5a0c1ddaabder1-320-320_00.gif")', opacity: '.5', position: 'fixed', width: '100%', height: '100vh', zIndex: '-1'}}></div>
      <App />
    
  </React.StrictMode>,
  document.getElementById('root')
)
