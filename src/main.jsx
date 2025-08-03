import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Appl from './Appl.jsx'
import { Provider } from 'react-redux'
import store from './stores/stores.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <StrictMode>
    <Appl />
  </StrictMode>
  </Provider>,
)
