import {connectionString, fetchObject} from '../config'
export const UserReducer = (state = null, action) => {
  let base = {
  }
  if (state) {
    switch (action.type) {
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
                console.log(data)
                return Object.assign(newState, data.user)
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
