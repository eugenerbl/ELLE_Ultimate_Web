import React from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, Button, Container } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../stylesheets/loginstyle.css';
import '../stylesheets/style.css';
import '../lib/bootstrap/css/bootstrap.min.css';
import '../lib/ionicons/css/ionicons.min.css';

export default class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      confirm: '',
      permission: 'User',
      classID: '',
      message: '',
      pass_question: 1,
      pass_answer: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  };


  handleChange(event) {
    this.setState({
      pass_question: event.target.value,
    })
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submit(e) {
    console.log(this.state.username);
    console.log(this.state.sex);
    e.preventDefault();
    axios.post(this.props.serviceIP + '/register', {
      username: this.state.username,
      password: this.state.password,
      confirm: this.state.confirm,
      classID: this.state.classID,
      pass_question: this.state.pass_question,
      pass_answer: this.state.pass_answer,
    }).then(res => {
      localStorage.setItem('jwt', res.data);
      this.props.history.push('/login');
    }).catch(error =>{
          console.log(error);
          console.log(error.message);
          console.log(error.response.data);
          console.log(error.response.data.message);
          this.setState({ 'message': error.response.data.message });
        });
  }

  render() {
  return (
  <Container>
    <header id="header">
      <div className="container">
        <div id="logo" className="pull-left">
          <Link to='/'>
            <img src={require('../Images/ELLE/ELLE-Background-Full.png')} 
              alt="ELLE Ultimate" title="Home" className="mainLogoStyle"/>
          </Link>
        </div>
        <nav id="nav-menu-container">
          <ul className="nav-menu">
            <li><Link to='/downloads'>Download</Link></li>
            <li><Link to='/profile'>My Profile</Link></li>
            <li><Link to='/login'>Log In</Link></li>
						<li><Link to='/signup'>Sign Up</Link></li>
						<li><a href="https://www.github.com/ItsNotRick/elle" className="github"><i className="fa fa-github fa-lg"></i></a></li>
          </ul>
        </nav>
      </div>
    </header>
    <div className="row main">
      <div className="main-login main-center">
        <h4 style={{textAlign: 'center'}}>Start your ELLE experience today.</h4>
        {
            this.state.message != '' &&
            <div className="alert alert-danger" role="alert">
             {this.state.message}
            </div>
          }
        <Form onSubmit={e => this.submit(e)}>
          <FormGroup>
            <Label for="userName">Username:</Label>
            <Input value={this.state.username}
              onChange={e => this.change(e)}
              id="username"
              name="username"
              placeholder="Username"
            />
            <FormFeedback>You will not be able to see this</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password:</Label>
            <Input value={this.state.password}
              onChange={e => this.change(e)}
              id="password"
              name="password"
              type="password"
              placeholder="*********">
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="confirm">Confirm Password:</Label>
            <Input value={this.state.confirm}
              onChange={e => this.change(e)}
              id="confirm"
              name="confirm"
              type="password"
              placeholder="*********">
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="pass_question">Security Question:</Label>
            <Input value={this.state.pass_question}
              onChange={(e) => this.handleChange(e)}
              type="select"
              id="pass_question"
              name="pass_question">
              <option value="1">What is your favorite book?</option>
              <option value="2">What is the name of the road you grew up on?</option>
              <option value="3">What is the name of your favorite pet?</option>
              <option value="4">What is your favorite food?</option>
              <option value="5">What was the model of your first car?</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="pass_answer">Security Answer:</Label>
            <Input value={this.state.pass_answer}
              onChange={e => this.change(e)}
              id="pass_answer"
              name="pass_answer"
              placeholder="Answer"
              type = "text"
            />
          </FormGroup>

          <FormGroup>
            <Label for="classID">Class ID (Optional):</Label>
            <Input value={this.state.classID}
              onChange={e => this.change(e)}
              id="classID"
              name="classID"
              placeholder="Enter Class ID">
            </Input>
          </FormGroup>
         

          <Button color="primary" type="submit" className="btn-block">Signup</Button>
        </Form>
        <br></br>
        <p>
          Already have an account? &nbsp;
          <Link to ='/Login' style={{color: 'white', textDecoration: 'underline'}}>Log in.</Link>
        </p>
      </div>
    </div>
  </Container>
  );
  }
}
