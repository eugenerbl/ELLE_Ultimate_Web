import React from 'react'
import { Button } from 'reactstrap';


class Card extends React.Component {
  constructor(props){
    super(props);
    this.deleteCard = this.deleteCard.bind(this);
    this.downloadImg = this.downloadImg.bind(this);
    this.downloadAudio = this.downloadAudio.bind(this);

    this.state = {
      card: this.props.card
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
  			<td>{this.state.card.front}</td>
  			<td>{this.state.card.back}</td>
        <td><Button onClick={this.downloadImg(this.state.card.cardID)}>Image</Button></td>
        <td><Button onClick={this.downloadAudio(this.state.card.cardID)}>Audio</Button></td>
        <td>{this.state.card.cardID}</td>
      </tr>
    );
  }
}

export default Card
