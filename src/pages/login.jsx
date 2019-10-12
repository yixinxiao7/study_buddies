import React, {Component} from 'react';
import {Row, Col, Container, Button} from 'react-bootstrap';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            value: event.target.value
        });
    }
    handleSubmit(event){
        event.preventDefault();
        if (this.state.value != 'password'){
            this.props.history.push('/login-fail');
        }else{
            this.props.history.push('/home');
        }
    }
    renderLoginForm(){
        return(
            // <div>
            //     Username:
            // </div>
            <div>           
                Password:
                <form style={{display: 'flex', justifyContent: 'center'}} onSubmit={this.handleSubmit}>
                    <input type="password" value={this.state.value} onChange={this.handleChange} />
                    <Button variant="primary" input type="submit" value="Submit" size="sm">Submit</Button>
                </form>
            </div>
        );
    }
    render(){
        return(
            <Container>
                <Row>
                    {this.renderLoginForm()}
                </Row>
            </Container>
        );
    }
}