import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  <App title={title} />,
  document.getElementById('root'),
)
module.hot.accept()

reportWebVitals()
