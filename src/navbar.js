import React, {Component} from 'react';
import {Nav, Navitem, Navbar, Badge} from 'reactstrap';


class Navigation extends Component{
    render(){
        return(
            <Navbar inverse fixedTop collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contacts">Contacts</Nav.Link>
              </Nav>
              <Nav>
                  <Nav pullRight>
                <Nav.Link href="/admin">Admin</Nav.Link>
                <Nav.Link eventKey={2} href="/cart">
                  Your Cart
                </Nav.Link>
              </Nav>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}

export default Navigation;