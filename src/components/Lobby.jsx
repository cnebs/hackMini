import React from 'react';
import Table from 'react-bootstrap/Table'

const Lobby = props => {

  // const {} = props;

  return (
    <Table striped boredered responsive hover>
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
  )
}

export default Lobby;