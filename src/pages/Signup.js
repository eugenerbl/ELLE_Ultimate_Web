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
			age: '',
			sex: '',
			password: '',
			motivation: '',
			permission: 'User',
			message: '',
		}
		this.handleChange = this.handleChange.bind(this);
		this.change = this.change.bind(this);
		this.submit = this.submit.bind(this);
	};

	handleChange(event) {
			 this.setState({
					 sex: event.target.value,
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
		axios.post('http://45.55.61.182/register', {
			username: this.state.username,
			password: this.state.password,
 			age: this.state.age,
			sex: this.state.sex,
			motivation: this.state.motivation
		}).then(res => {
			localStorage.setItem('jwt', res.data);
			this.props.history.push('/login');
		});
	}


  render() {
    return (
	
	<Container>
		<header id="header">
			<div className="container">
				<div id="logo" className="pull-left">
					<Link to='/'><img src={require('../Images/ELLE/ELLE-Background-Full.png')} alt="ELLE Ultimate"
					title="Home" className="mainLogoStyle"/></Link>
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
		
			<div className="row main">
			<div className="main-login main-center">
			<h4 style={{textAlign: 'center'}}>Start your ELLE experience today.</h4>
			
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
				<Label for="age">Age:</Label>
					<Input value={this.state.age}
						onChange={e => this.change(e)}
						id="age"
						name="age"
						placeholder="18"
					/>
			</FormGroup>
			<FormGroup>
				<Label for="sex">Sex:</Label>
					<Input value={this.state.sex}
						onChange={(e) => this.handleChange(e)}
						type="select"
						id="sex"
						name="sex">
						<option value="F">Male</option>
						<option value="M">Female</option>
					</Input>
			</FormGroup>
			<FormGroup>
				<Label for="motivation">Motivation:</Label>
					<Input value={this.state.motivation}
						onChange={e => this.change(e)}
						type="textarea"
						name="motivation"
						id="motivation"
						placeholder="Why are you playing ELLE?"
					/>
			</FormGroup>
			<FormGroup>
				<Label for="password">Password:</Label>
					<Input value={this.state.password}
						onChange={e => this.change(e)}
						type="text"
						id="password"
						name="password"
						placeholder="*********"
					/>
			</FormGroup>
				<Button color="primary" type="submit" className="btn-block">Signup</Button>
			</Form>
			<br></br>
			<p>Already have an account? <Link to ='/Login' style={{color: '#5FAEB5'}}>Log in.</Link></p>
			</div>
			</div>
			
			{/*
			
			<div className="row main">
			<div className="main-login main-center">
			<h4 style={{textAlign: 'center'}}>Start your ELLE experience today.</h4>
			<form className method="post" action="#">
			<div className="form-group">
			<label htmlFor="name" className="cols-sm-2 control-label">Your Name</label>
			<div className="cols-sm-10">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true" /></span>
			    <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
			</div>
			</div>
			</div>
			<div className="form-group">
			<label htmlFor="email" className="cols-sm-2 control-label">Your Email</label>
			<div className="cols-sm-10">
			<div className="input-group">
			    <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true" /></span>
			    <input type="text" className="form-control" name="email" id="email" placeholder="Email" />
			</div>
			</div>
			</div>
			<div className="form-group">
			<label htmlFor="username" className="cols-sm-2 control-label">Username</label>
			<div className="cols-sm-10">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true" /></span>
				<input type="text" className="form-control" name="username" id="username" placeholder="Username" />
			</div>
			</div>
			</div>
			<div className="form-group">
			<label htmlFor="password" className="cols-sm-2 control-label">Password</label>
			<div className="cols-sm-10">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true" /></span>
				<input type="password" className="form-control" name="password" id="password" placeholder="Password" />
			</div>
			</div>
			</div>
			<div className="form-group">
			<label htmlFor="confirm" className="cols-sm-2 control-label">Confirm Password</label>
			<div className="cols-sm-10">
			<div className="input-group">
				<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true" /></span>
				<input type="password" className="form-control" name="confirm" id="confirm" placeholder="Confirm Password" />
			</div>
			</div>
			</div>
			<div className="form-group ">
			<a href="#" type="button" id="btnLogin" className="btn btn-primary btn-lg btn-block login-button">Register</a>
			</div>
			</form>
			<h5>Already have an account? <a href="login.html">Login here.</a></h5>
			</div>
			</div>
			*/}
			
	</Container>
    );
  }
}
