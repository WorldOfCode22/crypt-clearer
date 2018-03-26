import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
// import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import {Provider} from 'react-redux'
import allReducers from './redux-reducers'
const store = createStore(allReducers, applyMiddleware(promise(), createLogger()))
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))
registerServiceWorker()
