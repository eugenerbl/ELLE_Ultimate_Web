import React from 'react';
import axios from 'axios';
import Template from './Template';
import { Button, Form, FormGroup, Input, Container, Label } from 'reactstrap';
import '../stylesheets/loginstyle.css';
import '../stylesheets/style.css';
import '../lib/bootstrap/css/bootstrap.min.css';
import '../lib/ionicons/css/ionicons.min.css';



export default class Recover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        username: '',
        userID: '',
        security_question: '',
        security_answer: '',
        new_pass: '',
        new_pass_confirm: '',
        message: '',
        correct_answer: false,
    };

    this.change = this.change.bind(this);
    this.submitPass= this.submitPass.bind(this);
    this.submitSecurity = this.submitSecurity.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
  }

change(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

submitPass(e) {
    e.preventDefault();
    var data = {
          userID: this.state.userID,
          pw: this.state.newpass,
          confirm: this.state.new_pass_confirm,
    }
        axios.post(this.props.serviceIP + '/forgot/reset', data)
        .then(res => {
          console.log(res.data.message);
          this.props.history.push('/login');
        }).catch(error=>{
          this.setState({ 'message': error.response.data.message });
      })
        this.setState({newpass: "",new_pass_confirm: ""});
        
  }

  submitAnswer(e){
      e.preventDefault();
      axios.post(this.props.serviceIP + '/forgot/check',{
          answer : this.state.security_answer,
          username: this.state.username,
      }).then(res=>{
          this.setState({
              correct_answer : true,
              userID: res.data.userID,
              message: '',
          });
      })
      .catch(error=>{
          this.setState({ 'message': error.response.data.message });
      })
  }

  submitSecurity(e){
      e.preventDefault();
      axios.post(this.props.serviceIP + '/forgot', {
          username: this.state.username,
      }).then(res=>{
          console.log(res.data);
          this.setState({
            /*username: '',
            userID: '',
            security_answer: '',
            new_pass: '',
            new_pass_confirm: '',
            correct_answer: false,*/
              security_question: res.data.question,
              message: '', 
              });
          console.log(res.data);
      }).catch(error=>{
          this.setState({ 'message': error.response.data.message });
      })
  }


  render() {
    return (
      <Container>
      <Template/>
		<br></br><br></br>
	  <div className = "container">
      <div className = "main-login main-center">
      <h3 style={{textAlign: 'center'}}>Forgot Password</h3>
      {
            this.state.message != '' &&
            <div className="alert alert-danger" role="alert">
             {this.state.message}
            </div>
    }
      { 
        this.state.security_question == '' &&
        <div>
        <Form className="ForgotForm" onSubmit={e=> this.submitSecurity(e)}>
          <FormGroup>
            <Label for="UserForgot">Enter your username:</Label>
            <Input type="text"
            name="username"
            id="username"
            onChange={e => this.change(e)}
            value={this.state.username} />
            </FormGroup>
            <Button type="submit" >Submit</Button>
        </Form>
        </div>
        }
        {
        (this.state.security_question != '' && !this.state.correct_answer) &&
        <Form className="QuestionForm" onSubmit={e => this.submitAnswer(e)}>
          <FormGroup>
          <div className="alert alert-primary" role="alert">
             {this.state.security_question}
            </div>
            <Label for="security_answer">Enter your answer:</Label>
            <Input type="text"
            name="security_answer"
            id="security_answer"
            onChange={e => this.change(e)}
            value={this.state.security_answer} />
          </FormGroup>
          
          <Button type="submit">Submit Answer</Button>
        </Form>
        }
        {
          (this.state.correct_answer && this.state.message == '') &&
          <div className="alert alert-primary" role="alert">
            Answer Verified.
        </div>
          
        }
        {
        this.state.correct_answer &&
        <div>
        
         
        <Form className="PasswordReset" onSubmit={e => this.submitPass(e)}>
        <h3>Reset Password</h3>
        <br></br>
        
          <FormGroup>
            <Label for="newpass">Enter your new password:</Label>
            <Input type="password"
            name="newpass"
            id="newpass"
            onChange={e => this.change(e)}
            value={this.state.newpass} />
          </FormGroup>
          <FormGroup>
            <Label for="new_pass_confirm">Confirm password:</Label>
            <Input type="password"
            name="new_pass_confirm"
            id="new_pass_confirm"
            onChange={e => this.change(e)}
            value={this.state.new_pass_confirm} />
          </FormGroup>

          
          <Button type="submit">Submit New Password</Button>
        </Form>
        </div>
        }
        
		<br/>
        </div>
        </div>
      </Container>
    );
  }
}
