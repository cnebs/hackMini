import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navibar = props => {
  return (
    <Navbar bg="primary" variant="dark">
    <Nav className="mr-auto">
      <Nav.Link style={{color: "white"}} href="Lobby">Lobby</Nav.Link>
      <Nav.Link style={{color: "white"}} href={`Lobby`}>My MiniHacks</Nav.Link>
      <Nav.Link style={{color: "white"}} href="CreateMiniHack">Create a MiniHack</Nav.Link>
    </Nav>
  </Navbar>
  )
}

export default Navibar;