import React from 'react';
import Table from 'react-bootstrap/Table'

const DashboardLeaderboard = props => {

  const {tournaments} = props;

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Hacker</th>
        </tr>
      </thead>
      <tbody>
        { tournaments.length ?
          tournaments[0].competitors.map( (user, i) => {
          return (
            <tr key={i}>
              <td>{i+1}</td>
              <td>{user}</td>
            </tr>
          )
        }) :
        <tr>
          <td>1</td>
          <td>user1</td>
        </tr>
        }
      </tbody>
    </Table>
  )
}

export default DashboardLeaderboard;