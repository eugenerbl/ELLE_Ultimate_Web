import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Container, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../stylesheets/loginstyle.css';
import '../stylesheets/style.css';
import '../lib/bootstrap/css/bootstrap.min.css';
import '../lib/ionicons/css/ionicons.min.css';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      message: '',
      forgot: false,
    };
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.forgotPass = this.forgotPass.bind(this);
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      forgot:true
    })
  }

  forgotPass(e){
    axios.get(this.props.serviceIP + '/forgot/'+ this.state.username,{
    }).then(res=>{
      localStorage.setItem('forgot_user',this.state.username);
      this.props.history.push('/recover');
    }).catch(error=>{
      console.log(error.response.data.message);
      this.setState({ 'message': error.response.data.message });
    })
  }

  submit(e) {
    e.preventDefault();
    axios.post(this.props.serviceIP + '/login', {
      username: this.state.username,
      password: this.state.password
    }).then(res => {
      console.log(res.data);
      console.log(res.data.access_token);
      console.log(res.data.permissions);
      localStorage.setItem('jwt', res.data.access_token);
      localStorage.setItem('per', res.data.permissions);
      localStorage.setItem('userID',res.data.id);
      console.log(localStorage.getItem('userID'));
      this.props.history.push('/profile');
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
              <img src={require('../Images/ELLE/ELLE-Background-Full.png')} alt="ELLE Ultimate"
                title="Home" className="mainLogoStyle"/>
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

      <div className="row main" >
        <div className="main-login main-center">
          <h4 style={{textAlign: 'center'}}>Welcome back to ELLE.</h4>
          {
            this.state.message != '' &&
            <div className="alert alert-danger" role="alert">
             {this.state.message}
            </div>
          }
          {
            this.state.forgot == true &&
            <div className="alert alert-primary" role="alert">
             Enter username then click the "Forgot Password" button.
            </div>
          }
          <Form onSubmit={e => this.submit(e)}>
            <FormGroup>
              <Label for="userName">Username:</Label>
              <Input type="username" name="username"
                onChange={e => this.change(e)}
                value={this.state.username}
                id="username" placeholder="Username" />
            </FormGroup>
            {' '}
            <FormGroup>
              <Label for="password">Password:</Label>
              <Input type="password" name="password"
                onChange={e => this.change(e)}
                value={this.state.password}
                id="password" placeholder="Password" />
            </FormGroup>
            {' '}
            
            {
            this.state.forgot == false &&
            <Button color="primary" type="submit" className="btn-block">Submit</Button>
            }
            {
            this.state.forgot == true &&
            <Button color="primary" onClick={ e => this.forgotPass(e)} className="btn-block">Forgot Password</Button>
            }
          </Form>
          <br></br>
					<p>
						Don't have an account? &nbsp;
						<Link to ='/signup' style={{color: 'white', textDecoration: 'underline'}}>Create one.</Link>
            Forgot Your Password? &nbsp;
            <a href="#" onClick = { e => this.handleClick(e)}>
            Click me
            </a>
					</p>
        </div>
      </div>
    </Container>
    );
  }
}
