import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {appStart} from './redux-actions'
import Home from './components/home'
import GameMainMenu from './components/game-main-menu'
import NewCharacter from './components/new-character'
class App extends Component {
  componentDidMount () {
    this.props.appStart()
  }
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/game' component={GameMainMenu} />
          <Route exact path='/game/newCharacter' component={NewCharacter} />
        </Switch>
      </BrowserRouter>
    )
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({appStart: appStart}, dispatch)
}
export default connect(null, matchDispatchToProps)(App)
