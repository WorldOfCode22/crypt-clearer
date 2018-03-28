import React, { Component } from 'react'
// import {BrowserRouter, Switch, Route} from 'react-router-dom'
// import AuthRoute from './components/core/auth-route'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {appStart} from './redux-actions'
import {Container} from 'reactstrap'
import Home from './components/home'
import GameMainMenu from './components/game-main-menu'
import NewCharacter from './components/new-character'
class App extends Component {
  componentDidMount () {
    this.props.appStart()
  }
  getLocation () {
    switch (this.props.game.location) {
      case 'HOME':
        return (<Home />)
      case 'MAIN_MENU':
        return (<GameMainMenu />)
      case 'NEW_CHARACTER':
        return (<NewCharacter />)
      default:
        return (<h1>Loading</h1>)
    }
  }
  render () {
    return (
      <Container>
        {this.getLocation()}
      </Container>
    )
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({appStart: appStart}, dispatch)
}

function matchPropsToState (state) {
  return {
    game: state.game
  }
}
export default connect(matchPropsToState, matchDispatchToProps)(App)
