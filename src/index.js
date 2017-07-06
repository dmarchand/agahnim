import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import ItemTracker from './items/ItemTracker'
import registerServiceWorker from './registerServiceWorker'



ReactDOM.render(<ItemTracker/>, document.getElementById('root'))
registerServiceWorker()
