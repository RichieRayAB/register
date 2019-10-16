import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 
'reactstrap';
import './App.css';

class FormComp extends Component {
    render(){
    return (
      
    
      <Form className="login-form" >
      <h2>Create a New Project</h2>
      <FormGroup>
        <Input type="text" placeholder="Project Title" className="inputStyle"/>
        </FormGroup>
        <FormGroup>
        <Input type="text" placeholder="Project Constant"className="inputStyle" />
        </FormGroup>
        <Button className="btn-red">Create</Button>
      </Form>
      
      
      
    );
  }
  }
  
  export default FormComp;