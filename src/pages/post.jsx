import React, {Component} from 'react';
import {Row, Col, Container, Button} from 'react-bootstrap';

export default class post extends React.Component{
	
	// This should be a dropdown box - when you start typing 
	// React Bootstrap dropdown
	constructor(props){
        super(props);
        this.state = {
        	class_: '',
        	location: '',
        	time: 1,
        	joinSet: true,
        	numberOfPeople: 1
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
    	  this.setState({
    	  	class_: event.target.class_,
            location: event.target.location,
            time: event.target.time,
            joinSet: event.target.joinSet,
            numberOfPeople: event.target.numberOfPeople,
        });
    }
    handleSubmit(event){
        event.preventDefault();

        this.props.history.push('/post-success');
    }

	renderEntry(){ // Maybe be a dropdown box too
		return( // Try linking it with a Map service?
				// How to dim the placeholder
			<div> 
				<form onSubmit={this.handleSubmit}>
				<label>
				Class
				<br />
				<select name = "class_" value={this.state.class_} onChange={this.handleChange}>
					<option value="">Select Class</option>
					<option value="EECS 281">EECS 281</option>
					<option value="AEROSP 343">AEROSP 343</option>
					<option value="ECON 101">ECON 101</option>
					<option value="ENGR 101">ENGR 101</option>
				</select>
				</label>
				<br/>
				<label>
				Location
				<br />
				<select name = "location" value={this.state.location} onChange={this.handleChange}>
					<option value="">Select Location</option>
					<option value="North Campus">North Campus - Dudestadt Center</option>
					<option value="Central Campus">Central Campus - UgLi</option>
					<option value="South Campus">South Campus - Big House</option>
					<option value="Off-Campus">Off-Campus</option>
				</select>
				</label>
				<br />
				<label>
				Duration(hr)
				<br />
					<input name = "time" type="number" min="1" max="24" step="0.5" value={this.state.time} onChange={this.handleChange} required/>
				</label>
				<br />	
				<label>
				Number of people
				<br />
				<input name = "numberOfPeople" type="number" min="1" max="100" value={this.state.numberOfPeople} onChange={this.handleChange} required/>
				</label>
				<br />
				<label>
				Private?
					<input name="joinSet" type="checkbox" value={this.state.joinSet} onChange={this.handleChange} />
				</label>
					<Button variant="outline-dark" input type="submit" size="lg" block> Post </Button>
				</form>
			</div>
		);
	}

	render(){
		return(
			<Container>
				<Row>
					{this.renderEntry()}
				</Row>
			</Container>
			);
	}
}
