import React, { Component } from 'react';
import User from '../components/UserList/User';
import { Container, Table } from 'reactstrap';
import axios from 'axios';

class UserList extends Component {

    constructor(props) {
        super(props)
        this.state = {
          userID: '',
          users: []
        }
    }

    change(e) {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    submit(e) {
      e.preventDefault();
      var data = {
            userID: this.state.userID,
      }
      var headers = {
          'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      }
          axios.post('http://10.171.204.206/admin', data, {headers:headers})
          .then(res => {
            console.log(res.data);
          }).catch(function (error) {
            console.log(error);
          });
    }

    componentDidMount() {
        axios.get('http://10.171.204.206/users', {
          headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
        }).then(res => {
            console.log(res.data);
            this.setState({
              users : res.data });
          }).catch(function (error) {
            console.log(error);
          });
      }


    render() {
        return (
          <Container className="user-list">
            <Table hover>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Username</th>
                  <th>Permission</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((users) => {
                  return (
                    <User
                      key={users.id}
                      users={users}/>
                  )
                })}
              </tbody>
            </Table>
          </Container>
        )
    }
}

export default UserList
