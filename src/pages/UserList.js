import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Table } from 'reactstrap';
import axios from 'axios';

import User from '../components/UserList/User';

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
          axios.post(this.props.serviceIP + '/admin', data, {headers:headers})
          .then(res => {
            console.log(res.data);
          }).catch(function (error) {
            console.log(error);
          });
    }

    componentDidMount() {
        axios.get(this.props.serviceIP + '/users', {
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
      <br></br>
    
      <div className="btn-group" style={{width: '100%'}}>
        <button><Link to="/profile" className="customLink">Profile</Link></button>
        <button><Link to="/decks" className="customLink">Decks</Link></button>
        <button><Link to="/sessions" className="customLink">Sessions</Link></button>
        <button className="active"><Link to="/userlist" className="customLink">User List</Link></button>
        <button><Link to="/logout" className="customLink">Sign Out</Link></button>
      </div>
      <br></br><br></br>
    
      <div>
      <h3>List of Users</h3>
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
      </div>
    
    </Container>
        )
    }
}

export default UserList
