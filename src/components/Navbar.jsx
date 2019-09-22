import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

const Navibar = props => {
  return (
    <Navbar bg="primary" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link as="span"><Link style={{color: "white"}} to="/Lobby">Lobby</Link></Nav.Link>
        <Nav.Link as="span"><Link style={{color: "white"}} to="/MyMiniHacks">My MiniHacks</Link></Nav.Link>
        <Nav.Link as="span"><Link style={{color: "white"}} to="/CreateMiniHack">Create a MiniHack</Link></Nav.Link>
      </Nav>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">{props.user}</a>
        </Navbar.Text>
  </Navbar.Collapse>
    </Navbar>
  )
}

export default Navibar;