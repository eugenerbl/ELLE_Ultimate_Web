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
            {props.cards.map((cards) => {
              return (
                <Card
                  key={cards.cardID}
                  cards={cards}/>
              )
            })}
          </tbody>
        </Table>
	    )
}

export default CardList
