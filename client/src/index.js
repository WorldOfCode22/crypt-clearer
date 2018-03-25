import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import allReducers from './redux-reducers'
const store = createStore(allReducers)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))
registerServiceWorker()
