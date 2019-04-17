import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import axios from 'axios';
import Template from './Template';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        userID: '',
        users: [],
        username: "Temp",
        permissionGroup: "Admin",
        isPendingAdmin: "1",
        motivation: "",
        newpass: "",
        confirm: "",
        classID: "",
    };

    this.change = this.change.bind(this);
    this.submitPass= this.submitPass.bind(this);
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
          confirm: this.state.confirm,
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
        this.setState({newpass: "",confirm: ""});
  }

  componentDidMount() {
      //axios.get(this.props.serviceIP + '/user/' + localStorage.getItem('userID'), {
      axios.get(this.props.serviceIP + '/user', {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
      }).then(res => {
          console.log(res.data);
          this.setState({
            userID: res.data.id,
            username: res.data.username,
            classID: res.data.classID,
            motivation: res.data.motivation, });
        }).catch(function (error) {
          console.log(error);
        });
    }


  render() {
    return (
      <Container>
      <Template/>
		<br></br><br></br>
	  
      <h3>Your Profile</h3>
        <Form className="ProfileForm">
          <FormGroup>
            <Label for="username">Username</Label>
            <Input type="text"
            name="username"
            id="username"
            disabled
            value={this.state.username} />
          </FormGroup>
          <FormGroup>
            <Label for="motivation">Motivation:</Label>
            <Input type="textarea"
            name="motivation"
            id="motivation"
            disabled
            value={this.state.motivation} />
          </FormGroup>
          <FormGroup>
            <Label for="classID">Class ID:</Label>
            <Input type="text"
            name="classID"
            id="classID"
            disabled
            value={this.state.classID} />
          </FormGroup>
        </Form>
        
        <Form className="PasswordReset" onSubmit={e => this.submitPass(e)}>
        <h3>Reset Password</h3>
          <FormGroup>
            <Label for="newpass">Enter New Password:</Label>
            <Input type="password"
            name="newpass"
            id="newpass"
            onChange={e => this.change(e)}
            value={this.state.newpass} />
          </FormGroup>
          <FormGroup>
            <Label for="confirm">Confirm Password:</Label>
            <Input type="password"
            name="confirm"
            id="confirm"
            onChange={e => this.change(e)}
            value={this.state.confirm} />
          </FormGroup>
          <Button type="submit">Submit New Password</Button>
          

		  
        </Form>
		<br/>
      </Container>
    );
  }
}
