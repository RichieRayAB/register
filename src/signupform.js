import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 
'reactstrap';
import './App.css';
class Signup extends Component {
    render(){
    return (
      
      <Form className="login-form" >
      <h2>Sign Up</h2>
      <FormGroup>
        <Input type="email" placeholder="email" className="inputStyle"/>
        </FormGroup>
        <FormGroup>
        <Input type="password" placeholder="Password"className="inputStyle" />
        </FormGroup>
        <FormGroup>
        <Input type="text" placeholder="First Name"className="inputStyle" />
        </FormGroup>
        <FormGroup>
        <Input type="text" placeholder="Last Name"className="inputStyle" />
        </FormGroup>
        <Button className="btn-red">Sign Up</Button>
      </Form>
      
    );
  }
  }
  export default Signup;