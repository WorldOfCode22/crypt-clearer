import React, {Component} from 'react'
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {loginClicked} from '../../redux-actions/'
import {withRouter} from 'react-router'
class MyNavbar extends Component {
  render () {
    return (
      <div>
        <Navbar color='faded' light expand='md'>
          <NavbarBrand>Crypt Clearer</NavbarBrand>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink onClick={() => { this.props.loginClicked(this.props.login) }}>Login</NavLink>
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
