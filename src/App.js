import React from 'react';
import tournaments from './data/tournaments.js'
import { BrowserRouter, Route } from 'react-router-dom';
import UserLogin from './components/UserLogin';
import Lobby from './components/Lobby';
// import Cashier from './components/Cashier';
import Dashboard from './components/Dashboard';
// import SubmissionPortal from './components/SubmissionPortal';
// import PrizePayout from './components/PrizePayout';

class App extends React.Component {
  constructor(props) {
    super()
    this.state = {
      tournaments: []
    }
  }

  componentDidMount() {
    const tournamentsState = this.state.tournaments;
    for (let i of tournaments) {
      tournamentsState.push(i)
    }
    this.setState({tournaments : tournamentsState})
  }

  render() {

    const {tournaments} = this.state

    return (
      <div className="App">
        <br></br>
        <h1 style={{textAlign: "center"}} >MiniHacks</h1>
        <br></br>
        <BrowserRouter>
          <Route exact path="/" component={UserLogin}/>
          <Route path="/Lobby" render={() => <Lobby tournaments={tournaments} />}/>
          {/* <Route path="/Cashier" component={Cashier}/> */}
          <Route path="/Dashboard" render={() => <Dashboard tournaments={tournaments} />}/>
          {/* <Route path="/SubmissionPortal" component={SubmissionPortal}/> */}
          {/* <Route path="/PrizePayout" component={PrizePayout}/> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
