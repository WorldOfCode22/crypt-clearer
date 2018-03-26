import {combineReducers} from 'redux'
import {LoginReducer} from './auth-reducers'
import {UserReducer} from './user-reducers'
const allReducers = combineReducers({
  login: LoginReducer,
  user: UserReducer
})

export default allReducers
