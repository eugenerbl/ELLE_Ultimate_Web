import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import axios from 'axios';


export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        userID: '',
        users: [],
        username: "temp",
        permissionGroup: "Admin",
        isPendingAdmin: "1",
        sex: "M",
        age: "18",
        motivation: "Test",
        newpass: "",
        repass: ""
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
    }
    var headers = {
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    }
        axios.post('http://10.171.204.206/users/reset', data, {headers:headers})
        .then(res => {
          console.log(res.data);
        }).catch(function (error) {
          console.log(error);
        });
  }

  componentDidMount() {
      axios.get('http://10.171.204.206/user', {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
      }).then(res => {
          console.log(res.data);
          this.setState({
            userID: res.data.id,
            username: res.data.username,
            sex: res.data.sex,
            age: res.data.age,
            motivation: res.data.motivation, });
        }).catch(function (error) {
          console.log(error);
        });
    }


  render() {
    return (
      <Container>
      <h3>Profile</h3>
        <Form className="ProfileForm">
          <FormGroup row>
            <Label for="username">Username</Label>
            <Input type="text"
            name="username"
            id="username"
            disabled
            value={this.state.username} />
          </FormGroup>
          <FormGroup row>
            <Label for="age">Age</Label>
            <Input type="number"
            name="age"
            id="age"
            disabled
            value={this.state.age} />
          </FormGroup>
          <FormGroup row>
            <Label for="sex">Sex</Label>
            <Input type="text"
            name="sex"
            id="sex"
            disabled
            value={this.state.sex} />
          </FormGroup>
          <FormGroup>
            <Label for="motivation" sm={2}>Motivation:</Label>
            <Input type="textarea"
            name="motivation"
            id="motivation"
            disabled
            value={this.state.motivation} />
          </FormGroup>
        </Form>
        <Form className="PasswordReset" onSubmit={e => this.submitPass(e)}>
        <h3>New Password</h3>
          <Label for="Reset Password">Reset Password</Label>
          <FormGroup>
            <Label for="newpass">New Password</Label>
            <Input type="text"
            name="newpass"
            id="newpass"
            onChange={e => this.change(e)}
            value={this.state.newpass} />
          </FormGroup>
          <Button type="submit">Submit New Password</Button>
        </Form>
      </Container>
    );
  }
}
