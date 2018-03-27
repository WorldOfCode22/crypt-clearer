import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Redirect} from 'react-router-dom'
import {Container} from 'reactstrap'
import NavBar from './core/navbar'
class GameMenu extends Component {
  checkLogin () {
    console.log(this.props)
    if (this.props.user.username) {

    } else {
      return (
        <Redirect to='/' />
      )
    }
  }
  render () {
    return (
      <Container>
        {this.checkLogin()}
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
export default withRouter(connect(matchPropsToState)(GameMenu))
