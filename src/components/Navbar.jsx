import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../index.css';
import {Link} from 'react-router-dom';

const Navibar = props => {

  const {user, type} = props;

  return (
    <Navbar bg="primary" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link as="span"><Link style={{color: "white"}} to="/Lobby">Lobby</Link></Nav.Link>
        <Nav.Link as="span"><Link style={{color: "white"}} to="/MyMiniHacks">My MiniHacks</Link></Nav.Link>
        {type ? 
          <Nav.Link as="span"><Link style={{color: "white"}} to="/CreateMiniHack">Create a MiniHack</Link></Nav.Link> :
          <></>
        }
      </Nav>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          {`Welcome, ${user}`}
        </Navbar.Text>
        <Form inline>
          <Button className="SignOut" variant="outline-light" href="/" style={{paddingLeft : "5"}}>Sign Out</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navibar;