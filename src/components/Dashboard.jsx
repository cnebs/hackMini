import React from 'react';
import Navibar from './Navbar.jsx'
import Submission from './Submission.jsx'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Dashboard = props => {

  const {tournaments, clickedTournament, registeredTournaments, handleRegisterClick, user} = props;

  const [modalShow, setModalShow] = React.useState(false);

  const tournamentIndex = tournaments.indexOf(clickedTournament[0])

  return (
   <Container>
    <Navibar user={user}/>
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
      <p>
        {registeredTournaments.includes(clickedTournament[0]) ? 
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Submit Final Project
          </Button> :
          <Button onClick={() => (handleRegisterClick(tournamentIndex))}>
            REGISTER
          </Button>
        }
      </p>
      {/* <Button>
        REGISTER
      </Button>
      </p>
      <p>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Submit Final Project
      </Button>
      </p> */}
      
    </Jumbotron>

    <Submission show={modalShow} onHide={() => setModalShow(false)}/>
  </Container>
  )

}

export default Dashboard;