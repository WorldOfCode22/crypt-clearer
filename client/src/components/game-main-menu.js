import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
class GameMenu extends Component {
  checkLogin () {
    console.log(this.props)
    if (this.props.user.username) {
      return (<h1>Hello</h1>)
    } else {
      return (
        <Link to='/' />
      )
    }
  }
  render () {
    return (
      <div>
        {this.checkLogin()}
      </div>
    )
  }
}

function matchPropsToState (state) {
  return {
    user: state.user
  }
}
export default withRouter(connect(matchPropsToState)(GameMenu))
