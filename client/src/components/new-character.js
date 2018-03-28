import React, {Component} from 'react'
import {Container} from 'reactstrap'
// import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {attrIncrement, attrDecrement} from '../redux-actions'
import StatEditLine from './core/stat-edit-line'
class NewCharacter extends Component {
  render () {
    return (
      <Container>
        <h1 className='text-center'>Edit Your Base Stats</h1>
        <h3 className='text-center'>Points Left: {this.props.game.activeCharacter.currentAttrPoints}</h3>
        <StatEditLine
          statHeader='Health: '
          stat={this.props.game.activeCharacter.health}
          incrementFunction={() => { this.props.attrIncrement('health', 10) }}
          decrementFunction={() => { this.props.attrDecrement('health', 10) }} /><br />
        <StatEditLine
          statHeader='Energy: '
          stat={this.props.game.activeCharacter.energy}
          incrementFunction={() => { this.props.attrIncrement('energy', 10) }}
          decrementFunction={() => { this.props.attrDecrement('energy', 10) }} /><br />
        <StatEditLine
          statHeader='Vision: '
          stat={this.props.game.activeCharacter.vision}
          incrementFunction={() => { this.props.attrIncrement('vision', 1) }}
          decrementFunction={() => { this.props.attrDecrement('vision', 1) }} /><br />
        <StatEditLine
          statHeader='Attack:'
          stat={this.props.game.activeCharacter.baseAttackDamage}
          incrementFunction={() => { this.props.attrIncrement('baseAttackDamage', 10) }}
          decrementFunction={() => { this.props.attrDecrement('baseAttackDamage', 10) }} /><br />
        <StatEditLine
          statHeader='Critical Chance: '
          stat={this.props.game.activeCharacter.baseAttackCriticalChance}
          incrementFunction={() => { this.props.attrIncrement('baseAttackCriticalChance', 0.1) }}
          decrementFunction={() => { this.props.attrDecrement('baseAttackCriticalChance', 0.1) }} /><br />
        <StatEditLine
          statHeader='Critical Multiplier: '
          stat={this.props.game.activeCharacter.baseAttackCriticalMultiplier}
          incrementFunction={() => { this.props.attrIncrement('baseAttackCriticalMultiplier', 0.1) }}
          decrementFunction={() => { this.props.attrDecrement('health', 10) }} /><br />
      </Container>
    )
  }
}

function matchPropsToState (state) {
  return {
    game: state.game
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({attrIncrement, attrDecrement}, dispatch)
}
export default connect(matchPropsToState, matchDispatchToProps)(NewCharacter)
