export const LoginReducer = (state = null, action) => {
  let base = {
    dropDown: false
  }
  if (state) {
    switch (action.type) {
      case 'LOGIN_CLICKED':
        let newState = state
        newState.dropDown = !newState.dropDown
        return newState
      default:
        return action
    }
  } else {
    return base
  }
}
