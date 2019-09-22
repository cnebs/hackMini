import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const UserLogin = props => {
  const [userType, setUserType] = useState('');
  const {handleEmailChange, handlePasswordChange, emailText, passwordText, handleBadLogin, handleLogin} = props
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col md="6">
      <Card>
        <Card.Header>
          MiniHacks Login
        </Card.Header>
        <Card.Body>
        <Form>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control onChange={handleEmailChange} type="email" placeholder="Email" />
            </Col>
          </Form.Group>
        
          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" />
            </Col>
          </Form.Group>
          <fieldset>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>I am a:</Form.Label>
            <Form.Control as="select">
              <option onClick={() => setUserType("Competitor")}>Hacker</option>
              <option onClick={() => setUserType("Judge")}>Judge</option>
            </Form.Control>
          </Form.Group>

            
          </fieldset>
          <Form.Group>
            {emailText.length && passwordText.length && emailText.includes('@') ? 
              <Link to="Lobby">
                <Button onClick={handleLogin} type="submit">Enter</Button>
              </Link> :
              <Button onClick={handleBadLogin} type="Submit">Enter</Button>
            }
          </Form.Group>
        </Form>
        </Card.Body>
      </Card>
      </Col>
      <Col></Col>
      </Row>
    </Container>
  );
};

export default UserLogin;
