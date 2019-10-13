import React, {Component} from 'react';
import {Row, Col, Container, Button} from 'react-bootstrap';



export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
        };

        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUserNameChange(event){
       // console.log(event.target.value)
        this.setState({
            username: event.target.value,
        });
    }
    handlePasswordChange(event){
        this.setState({
            password: event.target.value,
        });
    }
    handleSubmit(event){
        event.preventDefault(); // Hard Coded for simple login authentication
       if (this.state.username == "username" || this.state.password == "password"){
            this.props.history.push('/home');
        }else{
            this.props.history.push('/login-fail');

        }
    }
    renderLoginForm(){
       return(
            // <div>
            //     Username:
            // </div>
            <div>           
                <form style={{display: 'flex', justifyContent: 'center'}} onSubmit={this.handleSubmit}>
                <label>
                 Username:
                    <input name="username" type="text" value={this.state.username} onChange={this.handleUserNameChange} required/>
                </label>
                <br />
                <label>
                Password:
                    <input name="password" type="text" value={this.state.password} onChange={this.handlePasswordChange} required/>
                </label>
                    <Button variant="primary" input type="submit" value="Submit" size="sm">Log in</Button>
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