import React from 'react'
import {Container, Row, Col, Button} from 'reactstrap'
// import {withRouter} from 'react-router-dom'
const StatEditLine = (props) => (
  <Container>
    <Row>
      <Col>
        <h5>{props.statHeader}</h5>
      </Col>
      <Col>
        <Button>Less</Button>
      </Col>
      <Col>
        <h5>{props.stat}</h5>
      </Col>
      <Col>
        <Button>Plus</Button>
      </Col>
    </Row>
  </Container>
)

export default StatEditLine
