import React from 'react';
import Navibar from './Navbar.jsx';
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import {Link} from 'react-router-dom'

const MyMiniHacks = props => {

  const {registeredTournaments, handleMiniHackClick, user} = props;

  return (
    <Container>
    <Navibar user={user}/>

      <Table striped boredered="true" responsive hover variant="dark">
        <thead>
          <tr>
            <th>Registered</th>
            <th>MiniHack</th>
            <th>Prize</th>
            <th>Start Time</th>
            <th>Duration</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {registeredTournaments.map( (tourney, i) => {
            return (
              <tr key={i}>
                <td>{tourney.competitors.length}/{tourney.max_competitors}</td>
                <td><Link to="/Dashboard" onClick={() => (handleMiniHackClick(tourney))}>{tourney.name}</Link></td>
                <td>${tourney.prize}</td>
                <td>{tourney.start_time}</td>
                <td>24 hours</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
  )
}

export default MyMiniHacks;
