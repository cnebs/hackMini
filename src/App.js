import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import UserLogin from './components/UserLogin';
import Lobby from './components/Lobby';
import Cashier from './components/Cashier';
import Dashboard from './components/Dashboard';
import SubmissionPortal from './components/SubmissionPortal';
import PrizePayout from './components/PrizePayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={UserLogin}/>
        <Route path="/Lobby" component={Lobby}/>
        <Route path="/Cashier" component={Cashier}/>
        <Route path="/Dashboard" component={Dashboard}/>
        <Route path="/SubmissionPortal" component={SubmissionPortal}/>
        <Route path="/PrizePayout" component={PrizePayout}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
