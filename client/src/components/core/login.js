import React from 'react'
import {Form, FormGroup, Input, Label} from 'reactstrap'
const login = () => (
  <Form>
    <FormGroup>
      <Label for='username'>Username</Label>
      <Input name='username' />
    </FormGroup>
    <FormGroup>
      <Label for='password'>Password</Label>
      <Input name='password' />
    </FormGroup>
  </Form>
)

export default login
