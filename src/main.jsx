import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import User from './User.jsx'
/*import './index.css'*/
import './New.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
    <User  name="Name" city="newyork"  />
  </React.StrictMode>,
)
