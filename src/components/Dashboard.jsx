import React from 'react';
import Navibar from './Navbar.jsx'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Dashboard = props => {

  const {clickedTournament} = props;

  return (
   <Container>
    <Navibar />
    <Jumbotron>
      <h1>
        {clickedTournament.length ? clickedTournament[0].name : <></>}
      </h1>
      <p>
        {clickedTournament.length ? clickedTournament[0].information.description : <></>}
      </p>
      <h3>
        Requirements:
      </h3>
      <p>
        {clickedTournament.length ? clickedTournament[0].information.requirements.map( (r, i) => (<li key={i}>{r}</li>)) : <></>}
      </p>
      <h3>
        When:
      </h3>
      <p>
        {clickedTournament.length ? clickedTournament[0].start_time : <></>}
      </p>
      <br></br>
      <Button>
        REGISTER
      </Button>
    </Jumbotron>
  </Container>
  )

}

export default Dashboard;