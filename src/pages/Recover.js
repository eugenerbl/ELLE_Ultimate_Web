import React from 'react';
import axios from 'axios';
import Template from './Template';
import { Button, Form, FormGroup, Input, Container, Label } from 'reactstrap';

export default class Recover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        username: "Temp",
        security_question: '',
        security_answer: '',
        new_pass: '',
        new_pass_confirm: '',
        correct_answer: false,
    };

    this.change = this.change.bind(this);
    this.submitPass= this.submitPass.bind(this);
    this.submitSecurity = this.submitSecurity.bind(this);
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

submitPass(e) {
    e.preventDefault();
    var data = {
          userID: localStorage.getItem('forgot_user'),
          pw: this.state.newpass,
    }
    var headers = {
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    }
        axios.post(this.props.serviceIP + '/users/reset', data, {headers:headers})
        .then(res => {
          console.log(res.data);
        }).catch(function (error) {
          console.log(error);
        });
        this.setState({newpass: ""});
  }

  submitSecurity(e){
      e.preventDefault();
      var data = {
          username : localStorage.getItem('forgot_user'),
          answer : this.state.security_answer,
      }
      axios.get(this.props.serviceIP + '/forgot/check',data,{
      }).then(res=>{
          this.setState({correct_answer: true})
          console.log(res.data);
      }).catch(function (error) {
          console.log(error.response.data.message);
        });
  }

  componentDidMount() {
       //axios.get(this.props.serviceIP + '/user/' + localStorage.getItem('userID'), {
      axios.get(this.props.serviceIP + '/forgot/'+localStorage.getItem('forgot_user'), {
      }).then(res => {
          this.setState({
            security_question: res.data.question,
           });
           console.log(res.data);
        }).catch(function (error) {
          console.log(error);
        });
    }


  render() {
    return (
      <Container>
      <Template/>
		<br></br><br></br>
	  
      <h3>Forgot Password</h3>
        <Form className="ForgotForm" onSubmit={e=> this.submitSecurity(e)}>
          <FormGroup>
            <Label for="security_answer">Security Answer:</Label>
            <Input type="textarea"
            name="security_answer"
            id="security_answer"
            onChange={e => this.change(e)}
            value={this.state.security_answer} />
            <Button type="submit">Submit Security Question</Button>
          </FormGroup>
        </Form>

        {
        this.state.correct_answer == true &&
        <Form className="PasswordReset" onSubmit={e => this.submitPass(e)}>
        <h3>Reset Password</h3>
          <FormGroup>
            <Label for="newpass">Enter your new password below.</Label>
            <Input type="text"
            name="newpass"
            id="newpass"
            onChange={e => this.change(e)}
            value={this.state.newpass} />
          </FormGroup>
          <Button type="submit">Submit New Password</Button>
        </Form>
          }
        
		<br/>
      </Container>
    );
  }
}
