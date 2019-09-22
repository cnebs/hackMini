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
      requirementsCounter: [],
      newTournamentName: '',
      newTournamentDesription: '',
      newTournamentRequirements: [],
      newTournamentStart: '',
      newTournamentPrize: 0,
      newTournamentMax: 0,
      createdTournament: {information: {}, competitors: ['a', 'b', 'c']}
    }

    this.handleMiniHackClick = this.handleMiniHackClick.bind(this);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleBadLogin = this.handleBadLogin.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleUserType = this.handleUserType.bind(this);
    this.handleAddRequirement = this.handleAddRequirement.bind(this);
    this.handleCreateTournament = this.handleCreateTournament.bind(this);
    this.handleTournamentNameChange = this.handleTournamentNameChange.bind(this);
    this.handleTournamentDescriptionChange = this.handleTournamentDescriptionChange.bind(this);
    this.handleTournamentRequirementsChange = this.handleTournamentRequirementsChange.bind(this);
    this.handleTournamentPrizeChange = this.handleTournamentPrizeChange.bind(this);
    this.handleTournamentMaxChange = this.handleTournamentMaxChange.bind(this);
    this.handleTournamentStartChange = this.handleTournamentStartChange.bind(this);

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

  handleTournamentNameChange(e) {
    this.setState({newTournamentName: e.target.value});
  }

  handleTournamentDescriptionChange(e) {
    this.setState({newTournamentDesription: e.target.value});
  }

  handleTournamentStartChange(e) {
    this.setState({newTournamentStart: e.target.value});
  }

  handleTournamentRequirementsChange(e) {
    const requirements = this.state.newTournamentRequirements;
    requirements.push(e.target.value);
    this.setState({newTournamentRequirements: requirements});
  }

  handleTournamentPrizeChange(e) {
    this.setState({newTournamentPrize: e.target.value});
  }

  handleTournamentMaxChange(e) {
    this.setState({newTournamentMax: e.target.value});
  }

  handleCreateTournament() {
    const tournaments = this.state.tournaments;
    const newTournament = this.state.createdTournament;
    newTournament.name = this.state.newTournamentName;
    newTournament.prize = this.state.newTournamentPrize;
    newTournament.start_time = this.state.newTournamentStart;
    newTournament.max_competitors = this.state.newTournamentMax;
    newTournament.information.description = this.state.newTournamentDescription;
    newTournament.information.media = '';
    newTournament.information.requirements = this.state.newTournamentRequirements;
    tournaments.push(newTournament);
    this.setState({tournaments : tournaments});
 }

 /*

    name: 'WWC Diversity Hackathon 5',
    prize: 1000,
    start_time: 'Sun, Sep 22 @ 8:00AM',
    max_competitors: 30,
    competitors: [
      'name1',
      'name2',
      'name3',
      'name4'
    ],
    information: {
      description: `This hackathon is a celebration of diversity. Anyone who supports diversity is welcome — no matter your level of technical knowledge. 
      We are providing a space for people of all backgrounds who want to start building their tech portfolio or finish up a tech project while learning new skills. Previous experience in tech is **NOT** required. 
      Plus, we have a parallel FREE workshop track for anyone who wants to come and just start learning, learn more, or meet people. 
      Not sure what to work on? We encourage participants to look into open data or civic hacking projects, for more information check out Open Austin.`,
      media: '',
      requirements: [
        'Support each other',
        'Be creative',
        'Have fun'
      ]
    }
 */

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
          <Route path="/Create" render={() => <CreateAMiniApp handleCreateTournament={this.handleCreateTournament} handleTournamentRequirementsChange={this.handleTournamentRequirementsChange} handleTournamentPrizeChange={this.handleTournamentPrizeChange} handleTournamentMaxChange={this.handleTournamentMaxChange} handleTournamentStartChange={this.handleTournamentStartChange} handleTournamentDescriptionChange={this.handleTournamentDescriptionChange} handleTournamentNameChange={this.handleTournamentNameChange} user={user} type={type} requirementsCounter={requirementsCounter} handleAddRequirement={this.handleAddRequirement} />} />
          <Route path="/Dashboard" render={() => <Dashboard tournaments={tournaments} clickedTournament={clickedTournament} registeredTournaments={registeredTournaments} handleRegisterClick={this.handleRegisterClick} user={user} type={type}/>}/>
          {/* <Route path="/SubmissionPortal" component={SubmissionPortal}/> */}
          {/* <Route path="/PrizePayout" component={PrizePayout}/> */}
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
