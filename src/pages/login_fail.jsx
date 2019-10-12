import React, {Component} from 'react';
import {Row, Col, Container, Button} from 'react-bootstrap';

export default class LoginFail extends React.Component{
    render(){
    	return(
    		<Container>
    		 <h>Login Failed</h>
    		 <br />
            <button onClick={() => this.props.history.push('/')}> Back </button>
            </Container>
    	);  
    }
}
