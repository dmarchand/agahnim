import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import ItemTracker from './items/ItemTracker'
import registerServiceWorker from './registerServiceWorker'

const ITEMS = [
  {name: 'Boomerang'}
]

ReactDOM.render(<ItemTracker items={ITEMS}/>, document.getElementById('root'))
registerServiceWorker()
