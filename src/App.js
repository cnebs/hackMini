import React from 'react';
import './App.css';
import Lobby from './components/Lobby.jsx';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Lobby />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
