import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';


const UserLogin = () => {
  return (
    <Container>
      <Form>
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
      We'll never share your email with anyone else.
      </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Link to="/Lobby">
        <Button variant="primary" type="submit">
        Submit
        </Button>
      </Link>
      </Form>
    </Container>
  );
};

export default UserLogin;
