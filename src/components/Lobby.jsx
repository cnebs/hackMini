import React from 'react';
import Navibar from './Navbar.jsx';
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

const Lobby = props => {

  const {tournaments, registeredTournaments, handleMiniHackClick, handleRegisterClick, user} = props;


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
          {tournaments.map( (tourney, i) => {
            return (
              <tr key={i}>
                <td>{tourney.competitors.length}/{tourney.max_competitors}</td>
                <td><Link to="/Dashboard" onClick={() => (handleMiniHackClick(tourney))}>{tourney.name}</Link></td>
                <td>${tourney.prize}</td>
                <td>{tourney.start_time}</td>
                <td>24 hours</td>
                <td> {!registeredTournaments.includes(tourney) ? <Button onClick={() => (handleRegisterClick(i))}>REGISTER</Button> : <Button>REGISTERED</Button>}</td>
                <td></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      
    </Container>
  )
}

export default Lobby;
