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
    };
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
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
      this.props.history.push('/decks');
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
              <li><Link to='/signup'>Sign Up</Link></li>
              <li><Link to='/login'>Login</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      {/*
        <h3>Login</h3>
        <Form onSubmit={e => this.submit(e)}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input type="username" name="username"
            onChange={e => this.change(e)}
            value={this.state.username}
            id="username" placeholder="Username" />
          </FormGroup>
          {' '}
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password"
            onChange={e => this.change(e)}
            value={this.state.password}
            id="password" placeholder="Password" />
          </FormGroup>
          {' '}
          <Button color="primary" type="submit">Submit</Button>
        </Form>
      <Link to ='/Signup' >Signup</Link>*/}
      <div className="row main" >
        <div className="main-login main-center">
          <h4 style={{textAlign: 'center'}}>Welcome back to ELLE.</h4>
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
            <Button color="primary" type="submit" className="btn-block">Submit</Button>
          </Form>
          <br></br>
          {/*
            <div className="form-group">
              <div className="cols-sm-10">
                <div className="input-group">
                  <input type="text" className="form-control" name="username" id="username" placeholder="Username" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="cols-sm-10">
                <div className="input-group">
                  <input type="password" className="form-control" name="password" id="password" placeholder="Password" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <a href="#" type="button" id="btnLogin" className="btn btn-primary btn-lg btn-block login-button">Log In</a>
            </div> */}
          <Link to ='/signup' style={{color: 'white'}}>Create an Account</Link>
        </div>
      </div>
    </Container>
    );
  }
}
