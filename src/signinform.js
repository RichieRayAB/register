import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 
'reactstrap';
import './App.css';
class SignForm extends Component {
    render(){
    return (
      
      <Form className="login-form" >
      <h2>Sign In</h2>
      <FormGroup>
        <Input type="email" placeholder="email" className="inputStyle"/>
        </FormGroup>
        <FormGroup>
        <Input type="password" placeholder="Password"className="inputStyle" />
        </FormGroup>
        <Button className="btn-red">Login</Button>
      </Form>
      
    );
  }
  }
  export default SignForm;