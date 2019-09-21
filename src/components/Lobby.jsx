import React from 'react';
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const Lobby = props => {

  const {tournaments} = props;

  return (
    <Container>
      <Table striped boredered="true" responsive hover variant="dark">
        <thead>
          <tr>
            <th>Registered</th>
            <th>Tournament</th>
            <th>Prize</th>
            <th>Duration</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tournaments.map( (tourney, i) => {
            return (
            <tr key={i}>
            <td>{tourney.competitors.length}/5</td>
            <td>{tourney.name}</td>
            <td>${tourney.prize}</td>
            <td>24 hours</td>
            <td><Button>REGISTER</Button></td>
          </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
  )
}

export default Lobby;