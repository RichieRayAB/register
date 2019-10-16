import React, {Component} from 'react';
import './App.css';
import FormComp from'./formcomponent.js';
import mario from './mario.gif';

import Menu from './navbar.js';

class App extends Component{
  render(){
    return(
      
<div className="App">
   <Menu />
    <FormComp /> 
    <img src={mario} className="img" />
    </div>
    );
  }
}
 
export default App;



