import React, { Component } from 'react';
import { Collapse, Button, Card, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
  
import AddCard from '../components/Decks/AddCard';
import DeckNav from '../components/Decks/DeckNav';
import Deck from '../components/Decks/Deck';

import '../stylesheets/style.css';
import '../lib/bootstrap/css/bootstrap.min.css';
import '../lib/font-awesome/css/font-awesome.min.css';
import '../lib/owlcarousel/assets/owl.carousel.min.css';
import '../lib/ionicons/css/ionicons.min.css';

const mainLogoStyle = {
	width: '150px',
	height: '42px',
	border: '0'
};

export default class Decks extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.toggleNewCard = this.toggleNewCard.bind(this);
    this.change = this.change.bind(this);
    this.deleteDeck = this.deleteDeck.bind(this);
    this.state = {
      colapse: false,
      collapseNewCard: false,
      deckID: "",
      userID: "",
      username: "",

      front: "",
      back: "",
      cardName: "",
      difficultly: 1,
      gifLocation: null,

      deckName: "",
      ttype: "",

      decks: [],

      cards: [],

      audio: [],

      image: []
    };
  }

  componentDidMount() {
      axios.get('http://45.55.61.182/decks/49', {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
      }).then(res => {
          console.log(res.data);
          this.setState({
            decks : res.data });
        }).catch(function (error) {
          console.log(error);
        });
    }

  deleteDeck(e) {
    e.preventDefault();
    var data = {
          deckID: this.state.deckID,
    }
    var headers = {
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    }
        axios.delete('http://45.55.61.182/deck', data, {headers:headers})
        .then(res => {
          console.log(res.data);
        }).catch(function (error) {
          console.log(error);
        });
  }

  submitDeck(e) {
    e.preventDefault();
    var data = {
          deckName: this.state.deckName,
          ttype: this.state.ttype,
    }
    var headers = {
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    }
        axios.post('http://45.55.61.182/deck', data, {headers:headers})
        .then(res => {
          console.log(res.data);
        }).catch(function (error) {
          console.log(error);
        });
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  toggleNewCard() {
    this.setState({ collapseNewCard: !this.state.collapseNewCard });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {

    const matchPath = this.props.match.path;

    return (
		<Container>
		<header id="header">
			<div className="container">
				<div id="logo" className="pull-left">
					<Link to='/'><img src={require('../Images/ELLE/ELLE-Background-Full.png')} alt="ELLE Ultimate"
					title="Home" style={mainLogoStyle}/></Link>
				</div>

				<nav id="nav-menu-container">
					<ul className="nav-menu">
						<li><Link to='/downloads'>Download</Link></li>
						<li><Link to='/profile'>My Profile</Link></li>
						<li><Link to='/signup'>Sign Up</Link></li>
						<li><Link to='/login'>Login</Link></li>
						<li><a href="www.google.com" className="github"><i className="fa fa-github fa-lg"></i></a></li>
					</ul>
				</nav>
			</div>
		</header>
		
        <Row><h3>Your Elle VR Decks:</h3></Row>
        <Row className="Seperated Col">
        <Col className="Left Column" xs="3">
          <Row>
            <Col>
                <Card>
                    <DeckNav
                      decks={this.state.decks}
                      decksPathname={matchPath}
                    />
                    <br/>
                    <Form onSubmit={e => this.submitDeck(e)}>
                      <FormGroup>
                        <Label for="deckName">Deck Name</Label>
                        <Input type="text"
                        onChange={e => this.change(e)}
                        value={this.state.deckName}
                        name="deckName"
                        id="deckName"
                        placeholder="Deck Name" />
                      </FormGroup>
					  
                      <FormGroup>
                        <Label for="ttype">Language</Label>
                        <Input type="text"
                        onChange={e => this.change(e)}
                        value={this.state.ttype}
                        name="ttype"
                        id="ttype"
                        placeholder="Language" />
                      </FormGroup>
					  
                      <Button color="primary" block type="submit">Add Deck</Button>
                    </Form>
                    <br />
					
                    <Form onSubmit={e => this.deleteDeck(e)}>
                      <Label for="cardID">Deck ID:</Label>
                      <Input type="text" name="cardID"
                      onChange={e => this.change(e)}
                      value={this.state.deckID}
                      id="username" placeholder="Username" />
                      <Button color="danger" block type="submit">Delete Deck</Button>
                    </Form>
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
                          <h3>Please select a Deck from the left menu.</h3>
                        </div>
                      )} />
                      <Route
                        path={`${matchPath}/:id`}
                        render={({ match }) => {
                          const deck = this.state.decks.find(
                            (a) => a.id === match.params.id
                          );
                          return (
                            <Container>
                              <Deck
                                id={match.params.id}
                                deck={deck}
                                deckPathname={matchPath}
                              />
                              <Button color="info" onClick={this.toggleNewCard} block>New Card</Button>
                                <Collapse isOpen={this.state.collapseNewCard}>
                                  <AddCard
                                  id={match.params.id}
                                  />
                                </Collapse>
                            </Container>
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
    )
  }
}
