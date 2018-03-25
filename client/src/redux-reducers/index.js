import {combineReducers} from 'redux'
import {LoginReducer} from './auth-reducers'
const allReducers = combineReducers({
  login: LoginReducer
})

export default allReducers
