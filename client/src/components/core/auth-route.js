// special thanks to Tyler Mcginnis for his article at tylermcginnis.com 'Protected routes and authentication with React Router v4'
import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
const AuthRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    props.login.isLoggedIn ? <Component {...props} /> : <Redirect to='/' />
  )} />
)

function matchPropsToState (state) {
  return {
    login: state.login
  }
}
export default connect(matchPropsToState)(AuthRoute)
