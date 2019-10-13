import React, {Component} from 'react';
import {Row, Col, Container, Button} from 'react-bootstrap';

export default class post extends React.Component{
	
	// This should be a dropdown box - when you start typing 
	// React Bootstrap dropdown
	constructor(props){
        super(props);
        this.state = {
        	firstName: 'Hello',
        	lastName: 'World',
        	class_: '',
        	location: '',
        	description: '',
        	time: 1,
        	joinSet: true,
        	numberOfPeople: 1,
        };

        this.handleClassChange = this.handleClassChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleJoinSetChange = this.handleJoinSetChange.bind(this);
        this.handlePeopleChange = this.handlePeopleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.postHandle = this.postHandle.bind(this);
    }
    handleClassChange(event){
    	console.log(event.target.value);
    	  this.setState({
    	  	class_: event.target.value, 
        });
    }
    handleLocationChange(event){
    	this.setState({
            location: event.target.value,
        });
    }
    handleTimeChange(event){
    	this.setState({
            time: event.target.value,
        });
    }
    handleJoinSetChange(event){
    	this.setState({
            joinSet: event.target.value,
        });
    }
    handlePeopleChange(event){
    	this.setState({
            numberOfPeople: event.target.value,
        });
    }
    handleDescriptionChange(event){
    	this.setState({
            description: event.target.value,
        });
    }

    // handleSubmit(event){
    //     event.preventDefault();
    //     this.props.history.push('/post-success');
    // }

	async postHandle(_firstname, _lastName, _class_, _location, _time, _description, _numberOfPeople, _joinSet){
		const url = '/sessioninfo/';
		const data = { firstName: _firstname,
					   lastName: _lastName,
					   class_: _class_,
					   time: _time,
					   description:_description,
					   numberOfPeople:_numberOfPeople,
					   joinSet: _joinSet,
					 };
		try {
		    const response = await fetch(url, {
			    method: 'POST', // or 'PUT'
			    body: JSON.stringify(data), // data can be `string` or {object}!
			    headers: {
			      	'Content-Type': 'application/json'
			    }
		  	});
	    const json = await response.json();
		console.log('Success:', JSON.stringify(json));
		} catch (error) {
			console.error('Error:', error);
		} 
	}

	renderEntry(){ // Maybe be a dropdown box too
		return( // Try linking it with a Map service?
				// How to dim the placeholder
			<div> 
				<form onSubmit={this.postHandle(this.state.firstName, this.state.lastName, this.state.class_, this.state.location, this.state.time, this.state.description, this.state.numberOfPeople, this.state.joinSet)}>
				<label>
				Class
				<br />
				<select name = "class_" value={this.state.class_} onChange={this.handleClassChange}>
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
				<select name = "location" value={this.state.location} onChange={this.handleLocationChange}>
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
					<input name = "time" type="number" min="1" max="24" step="0.5" value={this.state.time} onChange={this.handleTimeChange} required/>
				</label>
				<br />	
				<label>
				Description
				<br />
					<input name = "description" type="text" value={this.state.description} onChange={this.handleDescriptionChange} required/>
				</label>
				<br />
				<label>
				Number of people
				<br />
				<input name = "numberOfPeople" type="number" min="1" max="100" value={this.state.numberOfPeople} onChange={this.handlePeopleChange} required/>
				</label>
				<br />
				<label>
				Private?
					<input name="joinSet" type="checkbox" value={this.state.joinSet} onChange={this.handleJoinSetChange} />
				</label>
				<input type="hidden" id="firstName" value="Hello" />
				<input type="hidden" id="lastName" value="World" />
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


