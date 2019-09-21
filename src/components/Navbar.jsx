import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

const Navibar = props => {
  return (
    <Navbar bg="primary" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link><Link style={{color: "white"}} to="/Lobby">Lobby</Link></Nav.Link>
        <Nav.Link><Link style={{color: "white"}} to="/MyMiniHacks">My MiniHacks</Link></Nav.Link>
        <Nav.Link><Link style={{color: "white"}} to="/CreateMiniHack">Create a MiniHack</Link></Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Navibar;