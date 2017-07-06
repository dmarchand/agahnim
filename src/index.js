import React from 'react'
import ReactDOM from 'react-dom'
import MainDisplay from './MainDisplay'
import registerServiceWorker from './registerServiceWorker'
import './css/index.css'



ReactDOM.render(
  <MainDisplay/>
  ,
  document.getElementById('root')
)
registerServiceWorker()
