import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import useReducer from '../src/redux/features/User.js'

const store = configureStore({
  reducer:{
    user:useReducer,
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
