import React from 'react';
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const Lobby = props => {

  // const {} = props;

  return (
    <Container>
      <Table striped boredered responsive hover variant="dark">
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
          <tr>
            <td>1/5</td>
            <td>hackathon 2</td>
            <td>$1000</td>
            <td>24 hours</td>
            <td><Button>REGISTER</Button></td>
          </tr>
          <tr>
            <td>1/5</td>
            <td>Hackathon 3</td>
            <td>$1500</td>
            <td>24 hours</td>
            <td><Button>REGISTER</Button></td>
          </tr>
          <tr>
            <td>1/5</td>
            <td>WWC_Hackathon</td>
            <td>$150</td>
            <td>24 hours</td>
            <td><Button>REGISTER</Button></td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}

export default Lobby;