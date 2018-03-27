import {combineReducers} from 'redux'
import {LoginReducer} from './auth-reducers'
import {UserReducer} from './user-reducers'
import {GameReducers} from './game-reducers'
const allReducers = combineReducers({
  login: LoginReducer,
  user: UserReducer,
  game: GameReducers
})

export default allReducers
