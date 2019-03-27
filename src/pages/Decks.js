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


export default class Decks extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleNewCard = this.toggleNewCard.bind(this);
    this.change = this.change.bind(this);
    this.deleteDeck = this.deleteDeck.bind(this);
    this.state = {
      colapse: false,
      collapseNewCard: false,
      deckID: "300",
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
      axios.get(this.props.serviceIP + '/decks', {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
      }).then(res => {
        console.log(res.data);
        let decks = res.data['ids'].map((id, i)=>{
          return {id: id, name: res.data['names'][i]};
        });
        this.setState({
          decks : decks
        });
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
    axios.delete(this.props.serviceIP + '/deck', data, {headers:headers})
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
    axios.post(this.props.serviceIP + '/deck', data, {headers:headers})
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
    return (
    <Container>
    <header id="header">
      <div className="container">
        <div id="logo" className="pull-left">
          <Link to='/'>
            <img src={require('../Images/ELLE/ELLE-Background-Full.png')}
                 alt="ELLE Ultimate" title="Home" className="mainLogoStyle"/>
          </Link>
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
      <button className="active"><Link to="/decks" className="customLink">Decks</Link></button>
      <button><Link to="/sessions" className="customLink">Sessions</Link></button>
      <button><Link to="/userlist" className="customLink">User List</Link></button>
      <button><Link to="/logout" className="customLink">Sign Out</Link></button>
    </div>
    <br></br><br></br>
    <h3>Your Elle VR Decks:</h3>
    <Row className="Seperated Col">
      <Col className="Left Column" xs="3">
        <Row>
          <Col>
            <Card>
              {/*<DeckNav decks={this.state.decks} decksPathname={matchPath}/>*/}
              {
                this.state.decks.map((deck)=> (
                  <button onClick={
                    () => {
                      this.dRef.updateDeck({
                        deck: deck
                      })
                      this.setState({
                        deckID: deck.id
                      })
                    }
                  }>{deck.name}</button>
                ))
              }
              <br/>
              <Form className="thinForm" onSubmit={e => this.submitDeck(e)}>
                <FormGroup>
                  <Label for="deckName">Deck Name:</Label>
                  <Input type="text"
                    onChange={e => this.change(e)}
                    value={this.state.deckName}
                    name="deckName"
                    id="deckName"
                    placeholder="Deck Name"/>
                </FormGroup>
                <FormGroup>
                  <Label for="ttype">Language:</Label>
                  <Input type="text"
                    onChange={e => this.change(e)}
                    value={this.state.ttype}
                    name="ttype"
                    id="ttype"
                    placeholder="Language">
                  </Input>
                </FormGroup>
                <Button color="primary" block type="submit">Add Deck</Button>
              </Form>
              <br/>
              <Form className="thinForm" onSubmit={e => this.deleteDeck(e)}>
                <FormGroup>
                  <Label for="cardID">Deck ID:</Label>
                  <Input type="text" name="cardID"
                    onChange={e => this.change(e)}
                    value={this.state.deckID}
                    id="username" placeholder="Username" />
                </FormGroup>
                <Button color="danger" block type="submit">Delete Deck</Button>
              </Form>
              <br></br>
            </Card>
            <br></br>
          </Col>
        </Row>
      </Col>
      <Col className="Right Column">
        <Row>
          <Col>
            <Deck
              ref={dRef => {
                this.dRef = dRef;
              }}
              id={this.state.deckID}
              deck={this.state.decks.find((a) => a.id === this.state.deckID)}
              serviceIP={this.props.serviceIP}>
            </Deck>
            <Button color="info" onClick={this.toggleNewCard}	block>Add Card</Button>
            <br></br>
            <Collapse isOpen={this.state.collapseNewCard}>
              <AddCard
                id={this.state.deckID}
                serviceIP={this.props.serviceIP}>
              </AddCard>
            </Collapse>
            <br></br>
            <br></br><br></br>
          </Col>
        </Row>
      </Col>
    </Row>
    </Container>
    )
  }
}
