import React, {Component} from 'react'
import {Container} from 'reactstrap'
// import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
// import StatEditLine from './core/stat-edit-line'
class NewCharacter extends Component {
  render () {
    return (
      <Container>
        <h1>Edit Your Base Stats</h1>
      </Container>
    )
  }
}

function matchPropsToState (state) {
  return {
    user: state.user
  }
}

export default connect(matchPropsToState)(NewCharacter)
