import Character from '../game-classes/character'
export const GameReducers = (state = null, action) => {
  let base = {}
  if (state) {
    switch (action.type) {
      case 'APP_START_PENDING':
        return {...state, location: 'HOME'}
      case 'ENTER_GAME':
        return {...state, location: 'MAIN_MENU'}
      case 'ENTER_NEW_CHARACTER':
        return {...state, location: 'NEW_CHARACTER', activeCharacter: new Character()}
      case 'ATTR_INCREMENT':
        let activeCharacter = state.activeCharacter
        if (activeCharacter.currentAttrPoints >= 1) {
          activeCharacter[action.payload.attr] += action.payload.increment
          activeCharacter.currentAttrPoints -= 1
          return {...state, activeCharacter}
        } else {
          return state
        }
      case 'ATTR_DECREMENT':
        let activeChar = state.activeCharacter
        if ((activeChar.currentAttrPoints < activeChar.attrPointsPerLevel) && (activeChar[action.payload.attr] >= new Character()[action.payload.attr])) {
          activeChar[action.payload.attr] -= action.payload.decrement
          activeChar.currentAttrPoints += 1
          return {...state, activeCharacter: activeChar}
        } else {
          return state
        }
      default:
        return state
    }
  }
  return base
}
