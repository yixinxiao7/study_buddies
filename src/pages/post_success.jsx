import React, {Component} from 'react';
import {Row, Col, Container, Button} from 'react-bootstrap';

export default class submitSuccess extends React.Component{
    render(){
        return(
        	<div>
            <h>You've sucessfully posted.</h>
	            <br />
	            <button onClick={() => this.props.history.push('/post')}> One More Post </button>
	            <button onClick={() => this.props.history.push('/home')}> Return to Dashboard </button>
	        </div>
            );
    }
}
