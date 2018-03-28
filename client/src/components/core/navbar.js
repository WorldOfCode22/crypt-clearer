import React, {Component} from 'react'
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {loginClicked, enterGame, enterNewCharacter} from '../../redux-actions/'
// import {withRouter, Link} from 'react-router-dom'
import {connectionString} from '../../config'
class MyNavbar extends Component {
  getLoginLinks () {
    return (
      <NavItem>
        {this.logInOrOut()}
      </NavItem>
    )
  }
  logInOrOut () {
    if (this.props.login.isLoggedIn) {
      return (
        <NavLink href={connectionString() + '/auth/logout'}>Logout</NavLink>
      )
    } else {
      return (
        <NavLink onClick={() => { this.props.loginClicked(this.props.login) }}>Login</NavLink>
      )
    }
  }
  getGameLinks () {
    if ((this.props.game.location === 'HOME') && (this.props.login.isLoggedIn)) {
      return (
        <NavItem>
          <NavLink onClick={() => { this.props.enterGame() }}>Enter Game</NavLink>
        </NavItem>
      )
    } else if ((this.props.game.location === 'MAIN_MENU')) {
      return (
        <Nav>
          <NavItem>
            <NavLink>Battle</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => { this.props.enterNewCharacter() }}>New Character</NavLink>
          </NavItem>
        </Nav>
      )
    }
  }
  render () {
    return (
      <div>
        <Navbar color='faded' light expand='md'>
          <NavbarBrand>Crypt Clearer</NavbarBrand>
          <Nav className='ml-auto' navbar>
            {this.getGameLinks()}
            {this.getLoginLinks()}
          </Nav>
        </Navbar>
      </div>
    )
  }
}

function matchPropsToState (state) {
  console.log(state)
  return {
    login: state.login,
    game: state.game
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({loginClicked, enterGame, enterNewCharacter}, dispatch)
}
export default connect(matchPropsToState, matchDispatchToProps)(MyNavbar)
