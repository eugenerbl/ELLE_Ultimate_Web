import React from 'react'
import { Table } from 'reactstrap';
import Card from './Card';

const CardList = (props) => {
	    return (
        <Table hover>
          <thead>
            <tr>
              <th>English</th>
              <th>Translated</th>
              <th>Picture</th>
              <th>Audio</th>
							<th>ID</th>
            </tr>
          </thead>
          <tbody>
            {props.cards.map((card) => {
              return (
                <Card
                  key={card.cardID}
                  card={card}/>
              )
            })}
          </tbody>
        </Table>
	    )
}

export default CardList
