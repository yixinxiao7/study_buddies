import React, {Component} from 'react';
import {Row, Col, Container, Button} from 'react-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormControl, Form } from 'react-bootstrap';

class NavBar extends React.Component{
	render(){
		return(
			<Navbar bg="dark" variant="dark">
    		<Navbar.Brand href="#home">Study Buddies!</Navbar.Brand>
   		 	<Nav className="mr-auto">
      			<Nav.Link href="#home">Dashboard</Nav.Link>
      			<Nav.Link href="#post">Post</Nav.Link>
      			<Nav.Link href="#pricing">Pricing</Nav.Link>
    		</Nav>
    		<Form inline>
      			<FormControl type="text" placeholder="Search" className="mr-sm-2" />
      			<Button variant="outline-info">Search</Button>
    		</Form>
  			</Navbar>		
		);
	}
}

export default class Home extends React.Component{
    render(){
    	return(
		<NavBar/> 
		)    	 	        
    }
}
