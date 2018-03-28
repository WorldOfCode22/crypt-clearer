export const GameReducers = (state = null, action) => {
  let base = {}
  if (state) {
    switch (action.type) {
      case 'APP_START_PENDING':
        return {...state, location: 'HOME'}
      case 'ENTER_GAME':
        return {...state, location: 'MAIN_MENU'}
      case 'ENTER_NEW_CHARACTER':
        return {...state, location: 'NEW_CHARACTER'}
      default:
        return state
    }
  }
  return base
}
