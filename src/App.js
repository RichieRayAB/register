import React, {Component} from 'react';
import './App.css';
import {Navigation} from './navbar.js';
import FormComp from'./formcomponent.js';
import {Button, Form, FormGroup, Label, Input} from 
'reactstrap';

class App extends Component{
  render(){
    return(
<div className="App">
   <Navigation /> 
    <FormComp /> 
    </div>
    );
  }
}
 
export default App;



