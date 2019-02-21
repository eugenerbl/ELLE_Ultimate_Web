import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, FormText, Col } from 'reactstrap';
import axios from 'axios';

class AddCard extends React.Component {
	constructor(props) {
		super(props);

		this.change = this.change.bind(this);

		this.state = {
			cardID: "",
			id: this.props.id,
			front: "",
			back: "",
			cardName: "",
			difficulty: 1,
			selectedPicFile: null,
			selectedAudioFile: null

		};
	}

	picFileChangedHandler = (event) => {
	  this.setState({
			selectedPicFile: event.target.files[0]
		})
	}

	audioFileChangedHandler = (event) => {
	  this.setState({
			selectedAudioFile: event.target.files[0]
		})
	}

	change(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

	submitCard(e) {
		if (	this.state.front != null && this.state.back != null && this.state.cardName != null &&
			this.state.selectedPicFile != null && this.state.selectedAudioFile != null)
		{
	    e.preventDefault();;
			const formPicData = new FormData()
			formPicData.append('file', this.state.selectedPicFile)
			const formAudioData = new FormData()
			formAudioData.append('file', this.state.selectedAudioFile)
	    var data = {
				front: this.state.front,
				back: this.state.back,
				cardName: this.state.cardName,
				difficulty: this.state.difficulty,
	    }
			var fileheader = {
				'Authorization': 'Bearer ' + localStorage.getItem('jwt'),
				'Content-Type': 'multipart/form-data'
			}
	    var headers = {
	        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
	    }
	      axios.post('http://10.171.204.206/card/'+this.state.id, data, {headers:headers})
	      .then(res => {
	        console.log(res.data);
						axios.post('http://10.171.204.206/card/image/'+res.data.cardID, formPicData, {headers:fileheader})
						.then(res => {
							console.log(res.data);
						}).catch(function (error) {
							console.log(error);
						});
						axios.post('http://10.171.204.206/card/sound/'+res.data.cardID, formAudioData, {headers:fileheader})
						.then(res => {
							console.log(res.data);
						}).catch(function (error) {
							console.log(error);
						});
	      }).catch(function (error) {
	        console.log(error);
	      });
		} else {
			console.log("Please fill all inputs!");
		}
  }

		render () {
	    return (
				<Form onSubmit={e => this.submitCard(e)}>
					<Row>
						<Col>
							<FormGroup>
								<Label for="cardName">Card Name:</Label>
								<Input type="text"
								name="cardName"
								onChange={e => this.change(e)}
								value={this.state.cardName}
								id="cardName"
								placeholder="Card Name" />
							</FormGroup>
						</Col>
					</Row>
					<Row>
						<Col>
							<FormGroup>
								<Label for="front">English Word:</Label>
								<Input type="text"
								name="front"
								onChange={e => this.change(e)}
								value={this.state.front}
								id="front"
								placeholder="English Word" />
							</FormGroup>
						</Col>
					</Row>
				<Row>
					<Col>
						<FormGroup>
							<Label for="back">Translated Word:</Label>
							<Input type="text"
							name="back"
							onChange={e => this.change(e)}
							value={this.state.back}
							id="back"
							placeholder="Translated Word" />
						</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col>
						<FormGroup>
							<Label for="picFile">Picture: </Label>
							<Input type="file" onChange={this.picFileChangedHandler} />
							<FormText color="muted">
								Pick an actual Image for the card.
							</FormText>
						</FormGroup>
					</Col>
					<Col>
						<FormGroup>
							<Label for="audioFile">Audio File: </Label>
							<Input type="file" onChange={this.audioFileChangedHandler} />
							<FormText color="muted">
								Pick an audio file for the card.
							</FormText>
						</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col>
						<Button color="primary" type="submit" block>Add Card</Button>
					</Col>
				</Row>
				</Form>
	    )
		}
}

export default AddCard
