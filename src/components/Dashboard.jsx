import React from 'react';
import DashboardLeaderboard from './Dashboard-Leaderboard';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Dashboard = props => {

  // const {} = props;

  return (
    /*
    [___Overall Time Remaining:___|___Next Milestone: FrontEnd___]
    [____________22:21:31_________|__________02:21:21____________]
      < Dashboard-Leaderboard />    <Dashboard-CompetitorInfo />
    */
   <Container>
    <Row>
      <Table>
        <thead>
          <tr>
            <th>Overall Time Remaining:</th>
            <th>Next Submission: Front-End</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>22:21:31</td>
            <td>02:21:21</td>
          </tr>
        </tbody>
      </Table>
    </Row>
    <Row>
      <DashboardLeaderboard />
    </Row>
    </Container>
  )

}

export default Dashboard;