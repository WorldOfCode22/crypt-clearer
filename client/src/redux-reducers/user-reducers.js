export const UserReducer = (state = null, action) => {
  let base = {
  }
  if (state) {
    switch (action.type) {
      case 'APP_START_FULFILLED':
        return action.payload.user
      default:
        return state
    }
  } else {
    return base
  }
}
