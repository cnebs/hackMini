import React from 'react';
import logo from './logo.png'
import tournaments from './data/tournaments.js'
import { BrowserRouter, Route } from 'react-router-dom';
import UserLogin from './components/UserLogin';
import Lobby from './components/Lobby';
// import Cashier from './components/Cashier';
import Dashboard from './components/Dashboard';
import MyMiniHacks from './components/MyMiniHacks.jsx';
// import PrizePayout from './components/PrizePayout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CreateAMiniApp from './components/CreateAMiniHack';

class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      emailText: '',
      passwordText: '',
      type:'',
      user: '',
      tournaments: [],
      clickedTournament: [],
      registeredTournaments: [],
      requirementsCounter: []
    }

    this.handleMiniHackClick = this.handleMiniHackClick.bind(this);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleBadLogin = this.handleBadLogin.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleUserType = this.handleUserType.bind(this);
    this.handleAddRequirement = this.handleAddRequirement.bind(this);
  }

  componentDidMount() {
    const tournamentsState = this.state.tournaments;
    for (let tourney of tournaments) {
      tournamentsState.push(tourney);
    }
    this.setState({tournaments : tournamentsState});
  }

  handleEmailChange(e) {
    this.setState({emailText: e.target.value});
  
  }

  handlePasswordChange(e) {
    this.setState({passwordText: e.target.value});
  }

  handleUserType(e) {
    this.setState({type: e.target.value})
    console.log(this.state.type);
  }

  handleBadLogin() {
    alert(`Please enter both a valid email and password`);
  }

  handleLogin() {
    const email = this.state.emailText;
    const parsedEmail = email.split('@')[0];
    this.setState({user : parsedEmail});
  }

  handleMiniHackClick(tournament) {
    const stateClickedTournament = this.state.clickedTournament;
    stateClickedTournament[0] = tournament;
    this.setState({clickedTournament : stateClickedTournament});
  }

  handleRegisterClick(i) {
    const registered = this.state.registeredTournaments;
    registered.push(this.state.tournaments[i]);
    this.setState({registeredTournaments : registered});
  }

  handleAddRequirement() {
    const count = this.state.requirementsCounter;
    let val = count.length+1;
    count.push(val);
    this.setState({requirementsCounter : count});
  }

  render() {

    const {tournaments, clickedTournament, registeredTournaments, emailText, passwordText, user, type, requirementsCounter} = this.state

    return (
      <div className="App">

        {/* logo */}
        <Row>
          <Col></Col>
          <Col md="auto">
            <br></br>
            <img style={{textAlign: "center"}} src={logo} href="Lobby" alt="logo" />
            <br></br>
          </Col>
          <Col></Col>
        </Row>

        <br></br>

        {/* router */}
        <BrowserRouter>
          <Route exact path="/" render={() => <UserLogin handleEmailChange={this.handleEmailChange} handlePasswordChange={this.handlePasswordChange} emailText={emailText} passwordText={passwordText} handleBadLogin={this.handleBadLogin} handleLogin={this.handleLogin} handleUserType={this.handleUserType}/>}/>
          <Route path="/Lobby" render={() => <Lobby tournaments={tournaments} registeredTournaments={registeredTournaments} handleMiniHackClick={this.handleMiniHackClick} handleRegisterClick={this.handleRegisterClick} user={user} type={type}/>}/>
          <Route path="/MyMiniHacks" render={() => <MyMiniHacks registeredTournaments={registeredTournaments} handleMiniHackClick={this.handleMiniHackClick} user={user} type={type}/>}/>          
          <Route path="/Create" render={() => <CreateAMiniApp user={user} type={type} requirementsCounter={requirementsCounter} handleAddRequirement={this.handleAddRequirement} />} />
          <Route path="/Dashboard" render={() => <Dashboard tournaments={tournaments} clickedTournament={clickedTournament} registeredTournaments={registeredTournaments} handleRegisterClick={this.handleRegisterClick} user={user} type={type}/>}/>
          {/* <Route path="/SubmissionPortal" component={SubmissionPortal}/> */}
          {/* <Route path="/PrizePayout" component={PrizePayout}/> */}
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
