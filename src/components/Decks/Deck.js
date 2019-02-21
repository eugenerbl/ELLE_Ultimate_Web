import React from 'react'
import { Button, Container, Row, Col, Media, Form, Label, Input } from 'reactstrap';
import CardList from './CardList'
import axios from 'axios';

class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      cardID: '',
      id: this.props.id,
      deck: this.props.deck,

      deckName: '',
      ttype: "",

      cards: [],
    };

  }
  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submit(e) {
      e.preventDefault();
      var data = {
            cardID: this.state.cardID,
      }
      var headers = {
          'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      }
          axios.delete('http://45.55.61.182/card', data, {headers:headers})
          .then(res => {
            console.log(res.data);
          }).catch(function (error) {
            console.log(error);
          });
  }

  componentDidMount() {
      axios.get('http://45.55.61.182/deck/' +this.state.id, {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') },
      }).then(res => {
          console.log(res.data);
          this.setState({
            cards : res.data });
        }).catch(function (error) {
          console.log(error);
        });
        console.log(this.state.deck);
    }


  render () {
      return (
        <Container className='Deck'>
          <Row className='Header'>
            <Col>
              <Media body>
                <Media heading>
                </Media>
              </Media>
            </Col>
          </Row>
            <CardList
            cards = {this.state.cards}
            />
          <Row>
            <Col>
              <Form onSubmit={e => this.submit(e)}>
                <Label for="cardID">Card ID:</Label>
                <Input type="text" name="cardID"
                onChange={e => this.change(e)}
                value={this.state.cardID}
                id="username" placeholder="Username" />
                <Button color="danger" type="submit">Delete Card</Button>
              </Form>
            </Col>
          </Row>
          <Row>
            <br/>

          </Row>
        </Container>
      );
    };
  }

export default Deck
