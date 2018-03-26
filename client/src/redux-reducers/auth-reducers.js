import {connectionString, fetchObject} from '../config'
export const LoginReducer = (state = null, action) => {
  let base = {
    dropDown: false,
    isLogedIn: false
  }
  if (state) {
    console.log(state)
    switch (action.type) {
      case 'LOGIN_CLICKED':
        let newState = state
        newState.dropDown = !newState.dropDown
        return Object.assign({}, newState)
      case 'APP_START':
        global.fetch(connectionString() + '/auth/checkUser', fetchObject('GET'))
          .then(
            (res) => { return res.json() },
            err => { throw new Error(err) }
          )
          .then(
            (data) => {
              if (data) {
                let newState = state
                newState.isLogedIn = true
                return Object.assign({}, newState)
              }
            },
            err => { throw new Error(err) }
          )
          .catch(
            err => { console.log(err); return state }
          )
        return state
      default:
        return state
    }
  } else {
    return base
  }
}
