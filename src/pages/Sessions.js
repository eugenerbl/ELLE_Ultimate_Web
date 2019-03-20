import React, { Component } from 'react';
import { Card, Container, Row, Col, } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

import { NavLink as RNavLink} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import SessionNav from '../components/Sessions/SessionNav';
import Rounds from '../components/Sessions/Rounds';
import '../lib/bootstrap/css/bootstrap.min.css';
import '../lib/ionicons/css/ionicons.min.css';

export default class Sessions extends Component {
	
	constructor(props) {
    super(props);

    this.state = {
      userID: '',
      sessions: [],
      LoggedAnswers: []
    }
  }

  componentDidMount() {
	  
      axios.get('http://10.32.132.111/sessions', {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
      }).then(res => {
		  console.log(res.data);
          this.setState({
            sessions : res.data });
		}).catch(function (error) {
          console.log(error);
        });
	  
    }

  render() {

    const matchPath = this.props.match.path;

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
		<br></br>
	  
		<div className="btn-group" style={{width: '100%'}}>
		  <button><Link to="/profile" className="customLink">Profile</Link></button>
		  <button><Link to="/decks" className="customLink">Decks</Link></button>
		  <button className="active"><Link to="/sessions" className="customLink">Sessions</Link></button>
		  <button><Link to="/userlist" className="customLink">User List</Link></button>
		  <button><Link to="/logout" className="customLink">Sign Out</Link></button>
		</div>
		<br/><br/>
		{/*

	  <div>
        <Navbar light expand="md">
          <NavbarBrand to="/decks" tag={RNavLink}>Elle VR</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/decks" tag={RNavLink}>Decks</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  User
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink to="/profile" tag={RNavLink}>Profile</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to="/userlist" tag={RNavLink}>UserList</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink to="/logout" tag={RNavLink}>Sign Out</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

		*/}
        <h3>Your Elle VR Sessions:</h3>
	  
        <Row><h3>Your Elle VR Sessions:</h3></Row>
 master
        <Row className="Seperated Col">
        <Col className="Left Column" xs="3">
          <Row>
            <Col>
                <Card>
                  <SessionNav
                    sessions={this.state.sessions}
                    sessionsPathname={matchPath}
                  />
                </Card>
            </Col>
          </Row>
        </Col>
        <Col className="Right Column">
          <Row>
            <Col>
              <Container>
                <Card>
                  <Route exact path={matchPath} render={() => (
                    <div>
                      <h3 style={{textAlign: 'center'}}>Please select a session from the left.</h3>
                    </div>
                  )} />
                  <Route
                    path={`${matchPath}/:sessionID`}
                    render={({ match }) => {
                      const session = this.state.sessions.find(
                        (a) => a.id === match.params.sessionID
                      );
                      return (
                        <Rounds
                          session={session}
                        />
                      );
                    }}
                  />

                </Card>
              </Container>
            </Col>
          </Row>
        </Col>
        </Row>
      </Container>
    );
  }
}
