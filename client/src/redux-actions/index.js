import {connectionString, fetchObject} from '../config'
export const loginClicked = (login) => {
  return {
    type: 'LOGIN_CLICKED',
    payload: login
  }
}

export const appStart = () => {
  return {
    type: 'APP_START',
    async payload () {
      try {
        const response = await global.fetch(connectionString() + '/auth/checkUser', fetchObject('GET'))
        const data = response.json()
        return data
      } catch (err) {
        throw new Error(err)
      }
    }
  }
}

export const enterGame = () => {
  return {
    type: 'ENTER_GAME',
    payload: 'ENTER_GAME'
  }
}
