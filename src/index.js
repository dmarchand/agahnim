import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ItemTracker from './ItemTracker'
import registerServiceWorker from './registerServiceWorker'

const ITEMS = [
  {name: 'Boomerang'}
]

ReactDOM.render(<ItemTracker items={ITEMS}/>, document.getElementById('root'))
registerServiceWorker()
