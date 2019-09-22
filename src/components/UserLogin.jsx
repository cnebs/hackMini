import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


const UserLogin = () => {
  const [userType, setUserType] = useState('');
  return (
    <Container>
      <Form>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>
      
        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <fieldset>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
              I am a:
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="Competitor"
                onClick={() => setUserType("Competitor")}
                name="Competitor"
                id="Competitor"
              />
              <Form.Check
                type="radio"
                label="Judge"
                onClick={() => setUserType("Judge")}
                name="Judge"
                id="Judge"
              />
            </Col>
          </Form.Group>
        </fieldset>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Link to="Lobby">
              <Button type="submit">Sign in</Button>
            </Link>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default UserLogin;
