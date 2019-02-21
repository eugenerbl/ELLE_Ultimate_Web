import React from 'react'
import { Button } from 'reactstrap';


class Card extends React.Component {
  constructor(props){
    super(props);
    this.deleteCard = this.deleteCard.bind(this);
    this.downloadImg = this.downloadImg.bind(this);
    this.downloadAudio = this.downloadAudio.bind(this);

    this.state = {
      cards: this.props.cards
    }

  }

  deleteCard(id){

  }

  downloadImg(id){
    //console.log(this.state.cards.imageLocation);
  }

  downloadAudio(id){
    //console.log(this.state.cards.audioLocation);
  }

  render() {
    return (
      <tr>
  			<td>{this.state.cards.front}</td>
  			<td>{this.state.cards.back}</td>
        <td><Button onClick={this.downloadImg(this.state.cards.cardID)}>Image</Button></td>
        <td><Button onClick={this.downloadAudio(this.state.cards.cardID)}>Audio</Button></td>
        <td>{this.state.cards.cardID}</td>
      </tr>
    );
  }
}

export default Card
