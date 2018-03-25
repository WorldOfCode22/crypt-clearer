export const LoginReducer = (state = null, action) => {
  let base = {
    dropDown: false
  }
  if (state) {
    console.log(state)
    switch (action.type) {
      case 'LOGIN_CLICKED':
        let newState = state
        newState.dropDown = !newState.dropDown
        return Object.assign({}, newState)
      default:
        return action
    }
  } else {
    return base
  }
}
