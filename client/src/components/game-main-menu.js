import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
class GameMenu extends Component {
  render () {
    return (
      <h1>Welcome To Game Main Menu</h1>
    )
  }
}

function matchPropsToState (state) {
  console.log(state)
  return {
    user: state.user
  }
}
export default withRouter(connect(matchPropsToState)(GameMenu))
