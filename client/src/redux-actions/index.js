export const loginClicked = (login) => {
  return {
    type: 'LOGIN_CLICKED',
    payload: login
  }
}

export const appStart = () => {
  return {
    type: 'APP_START'
  }
}
