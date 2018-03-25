import React, {Component} from 'react'
import {Container} from 'reactstrap'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Navbar from './core/navbar'
import Login from './core/login'
class Home extends Component {
  displayLogin () {
    console.log(this.props.login)
    if (this.props.login.dropDown) {
      return (
        <Login />
      )
    }
  }
  render () {
    return (
      <Container>
        <Navbar />
        {this.displayLogin()}
      </Container>
    )
  }
}
function matchPropsToState (state) {
  console.log(state)
  return {
    login: state.login
  }
}
export default withRouter(connect(matchPropsToState)(Home))
