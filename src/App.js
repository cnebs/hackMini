import React from 'react';
import logo from './logo.png'
import tournaments from './data/tournaments.js'
import { BrowserRouter, Route } from 'react-router-dom';
import UserLogin from './components/UserLogin';
import Lobby from './components/Lobby';
// import Cashier from './components/Cashier';
import Dashboard from './components/Dashboard';
import MyMiniHacks from './components/MyMiniHacks.jsx'
// import SubmissionPortal from './components/SubmissionPortal';
// import PrizePayout from './components/PrizePayout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      tournaments: [],
      clickedTournament: [],
      registeredTournaments: []
    }

    this.handleMiniHackClick = this.handleMiniHackClick.bind(this);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
  }

  componentDidMount() {
    const tournamentsState = this.state.tournaments;
    for (let tourney of tournaments) {
      tournamentsState.push(tourney)
    }
    this.setState({tournaments : tournamentsState})
  }

  handleMiniHackClick(tournament) {
    const stateClickedTournament = this.state.clickedTournament;
    stateClickedTournament.push(tournament)
    this.setState({clickedTournament : stateClickedTournament})
  }

  handleRegisterClick(i) {
    const registered = this.state.registeredTournaments;
    registered.push(this.state.tournaments[i]);
    this.setState({registeredTournaments : registered});
  }

  render() {

    const {tournaments, clickedTournament, registeredTournaments} = this.state

    return (
      <div className="App">

        {/* logo */}
        <Row>
          <Col></Col>
          <Col md="auto">
            <br></br>
            <a href="/Lobby">
            <img style={{textAlign: "center"}} src={logo} href="Lobby" alt="logo" />
            </a>
            <br></br>
          </Col>
          <Col></Col>
        </Row>

        <br></br>

        {/* router */}
        <BrowserRouter>
          <Route exact path="/" component={UserLogin}/>
          <Route path="/Lobby" render={() => <Lobby tournaments={tournaments} registeredTournaments={registeredTournaments} handleMiniHackClick={this.handleMiniHackClick} handleRegisterClick={this.handleRegisterClick}/>}/>
          <Route path="/MyMiniHacks" render={() => <MyMiniHacks registeredTournaments={registeredTournaments} handleMiniHackClick={this.handleMiniHackClick} />}/>          
          {/* <Route path="/Cashier" component={Cashier}/> */}
          <Route path="/Dashboard" render={() => <Dashboard clickedTournament={clickedTournament} registeredTournaments={registeredTournaments}/>}/>
          {/* <Route path="/SubmissionPortal" component={SubmissionPortal}/> */}
          {/* <Route path="/PrizePayout" component={PrizePayout}/> */}
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
