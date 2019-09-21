import React from 'react';
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

const Lobby = props => {

  // const {} = props;

  return (
    <Container>
      <Table striped boredered responsive hover variant="dark">
        <thead>
          <tr>
            <th>Registered</th>
            <th>Tournament</th>
            <th>Fee</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1/5</td>
            <td>WWC_Hackathon</td>
            <td>$1</td>
            <td>24 hours</td>
          </tr>
          <tr>
          <td>1/5</td>
            <td>WWC_Hackathon</td>
            <td>$1</td>
            <td>24 hours</td>
          </tr>
          <tr>
          <td>1/5</td>
            <td>WWC_Hackathon</td>
            <td>$1</td>
            <td>24 hours</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}

export default Lobby;