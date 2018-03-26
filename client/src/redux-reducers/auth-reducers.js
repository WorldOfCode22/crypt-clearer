export const LoginReducer = (state = null, action) => {
  let base = {
    dropDown: false,
    isLogedIn: false
  }
  if (state) {
    switch (action.type) {
      case 'LOGIN_CLICKED':
        return {...state, dropDown: !state.dropDown}
      case 'APP_START_FUFILLED':
        return 'hello'
      default:
        return state
    }
  } else {
    return base
  }
}
