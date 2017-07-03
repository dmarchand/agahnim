import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SramWatcher from './SramWatcher';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SramWatcher />, document.getElementById('root'));
registerServiceWorker();
