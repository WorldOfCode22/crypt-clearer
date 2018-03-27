import React, {Component} from 'react'
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {loginClicked, enterGame} from '../../redux-actions/'
import {withRouter, Link} from 'react-router-dom'
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
          <NavLink tag={Link} to='/game' onClick={() => { this.props.enterGame() }}>Enter Game</NavLink>
        </NavItem>
      )
    } else if ((this.props.game.location === 'MAIN_MENU')) {
      return (
        <Nav>
          <NavItem>
            <NavLink tag={Link} to='/game/battle'>Battle</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to='/game/newCharacter'>New Character</NavLink>
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
  return bindActionCreators({loginClicked, enterGame}, dispatch)
}
export default withRouter(connect(matchPropsToState, matchDispatchToProps)(MyNavbar))
