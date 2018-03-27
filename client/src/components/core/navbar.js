import React, {Component} from 'react'
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {loginClicked} from '../../redux-actions/'
import {withRouter, Link} from 'react-router-dom'
import {connectionString} from '../../config'
class MyNavbar extends Component {
  getNavItem () {
    console.log(this.props.login)
    if (this.props.login.isLogedIn) {
      return (
        <NavLink tag={Link} to='/game'>Enter Game</NavLink>
      )
    } else {
      return (
        <NavLink onClick={() => { this.props.loginClicked(this.props.login) }}>Login</NavLink>
      )
    }
  }
  render () {
    return (
      <div>
        <Navbar color='faded' light expand='md'>
          <NavbarBrand>Crypt Clearer</NavbarBrand>
          <Nav className='ml-auto' navbar>
            <NavItem>
              {this.getNavItem()}
            </NavItem>
            <NavItem>
              <NavLink href={`${connectionString()}/auth/logout`}>Logout</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

function matchPropsToState (state) {
  console.log(state)
  return {
    login: state.login
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({loginClicked: loginClicked}, dispatch)
}
export default withRouter(connect(matchPropsToState, matchDispatchToProps)(MyNavbar))
