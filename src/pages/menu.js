import React, { Component } from 'react';
import { Collapse, Button, Card, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { Route, Link } from 'react-router-dom';

import '../stylesheets/style.css';
import '../lib/bootstrap/css/bootstrap.min.css';
import '../lib/font-awesome/css/font-awesome.min.css';
import '../lib/owlcarousel/assets/owl.carousel.min.css';
import '../lib/ionicons/css/ionicons.min.css';

export default class menu extends Component {
    render(){
        return(
<div className="btn-group" style={{width: '100%'}}>
      <button><Link to="/profile" className="customLink">Profile</Link></button>
      <button className="active"><Link to="/decks" className="customLink">Decks</Link></button>
      <button><Link to="/sessions" className="customLink">Sessions</Link></button>
      <button><Link to="/userlist" className="customLink">User List</Link></button>
      <button><Link to="/logout" className="customLink">Sign Out</Link></button>
      
        </div>)}
}