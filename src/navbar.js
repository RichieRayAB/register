"Use Strict"
import React, {Component} from 'react';
import './navbar.css';



class Menu extends Component{
    render(){
        return(
            <ul>
  <li><a href="/home">Home</a></li>
  <li><a href="/singinform.js">Login</a></li>
  <li><a href="/signupform.js">Sing Up</a></li>
  <li ><a className="active" href="#about">About</a></li>
</ul>
        );   
    }

}

export default Menu