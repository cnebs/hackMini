import React from 'react';
import DashboardLeaderboard from './Dashboard-Leaderboard';
import Navibar from './Navbar.jsx'
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Dashboard = props => {

  const {tournaments} = props;

  return (
    /*
    [___Overall Time Remaining:___|___Next Milestone: FrontEnd___]
    [____________22:21:31_________|__________02:21:21____________]
      < Dashboard-Leaderboard />    <Dashboard-CompetitorInfo />
    */
   <Container>
    <Navibar />
    <Row>
      <Table>
        <thead>
          <tr>
            <th>Time Remaining:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>22:21:31</td>
          </tr>
        </tbody>
      </Table>
    </Row>
    <Row>
      <DashboardLeaderboard tournaments={tournaments}/>
    </Row>
    </Container>
  )

}

export default Dashboard;