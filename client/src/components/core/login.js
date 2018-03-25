import React from 'react'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'
import {connectionString} from '../../config'
console.log(connectionString())
const login = () => (
  <Form method='post' action={connectionString() + '/auth/login'}>
    <FormGroup>
      <Label for='username'>Username</Label>
      <Input name='username' />
    </FormGroup>
    <FormGroup>
      <Label for='password'>Password</Label>
      <Input name='password' />
    </FormGroup>
    <Button btn='primary'>Login!</Button>
  </Form>
)

export default login
