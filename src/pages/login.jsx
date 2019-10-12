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
        this.setState({
            username: event.target.username,
        });
    }
    handlePasswordChange(event){
        this.setState({
            password: event.target.password,
        });
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.username);
       if (this.state.username == "haoranz"){
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
                    <input type="text" value={this.state.username} onChange={this.handleUserNameChange} required/>
                </label>
                <br />
                <label>
                Password:
                    <input type="text" value={this.state.password} onChange={this.handlePasswordChange} required/>
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