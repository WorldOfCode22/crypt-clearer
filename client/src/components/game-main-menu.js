import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {withRouter} from 'react-router-dom'
import {Container} from 'reactstrap'
import NavBar from './core/navbar'
// import AuthController from './core/auth-controller'
class GameMenu extends Component {
  render () {
    return (
      <Container>
        <NavBar />
      </Container>
    )
  }
}

function matchPropsToState (state) {
  return {
    user: state.user
  }
}
export default connect(matchPropsToState)(GameMenu)
