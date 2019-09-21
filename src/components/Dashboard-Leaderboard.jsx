import React from 'react';
import Table from 'react-bootstrap/Table'

const DashboardLeaderboard = props => {

  // const {} = props;

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Hacker</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>User2</td>
        </tr>
        <tr>
          <td>2</td>
          <td>User3</td>
        </tr>
        <tr>
          <td>3</td>
          <td>User1</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default DashboardLeaderboard;