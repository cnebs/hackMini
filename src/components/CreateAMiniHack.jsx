import React from 'react';
import Navibar from './Navbar.jsx';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CreateAMiniApp = props => {

  const {handleCreateTournament, handleTournamentNameChange, handleTournamentDescriptionChange, handleTournamentStartChange, handleTournamentRequirementsChange, handleTournamentPrizeChange, handleTournamentMaxChange, requirementsCounter, handleAddRequirement, user, type} = props;

  return (
    <Container>
      <Navibar user={user} type={type}/>
      <Card>
        {/* <Card.Header>Create a MiniHack</Card.Header> */}
        <Card.Body>
          <Form>
            <br></br>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Hackathon Title</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                onChange={handleTournamentNameChange}
                placeholder="Title Hackathon"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
        
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Description</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl onChange={handleTournamentDescriptionChange} as="textarea" aria-label="With textarea" />
            </InputGroup>
            <p></p><br></br>

            <InputGroup className="mb-4">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Start Date & Time</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                onChange={handleTournamentStartChange}
                placeholder="Sun, Sep 22 @ 8:00AM"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <label htmlFor="basic-url">Requirements</label>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  Requirement 1
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl onChange={handleTournamentRequirementsChange} id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>

            {requirementsCounter.map( (n, i) => (
              <InputGroup key={i} className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  Requirement {n+1}
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
            ))}
            
            <Button variant="outline-primary" onClick={handleAddRequirement}>Add Another Requirement</Button>

            <p></p><br></br>

            <Row>
              <Col>
                <label htmlFor="basic-url">Prize</label>

                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl onChange={handleTournamentPrizeChange} aria-label="Amount (to the nearest dollar)" />
                  <InputGroup.Append>
                    <InputGroup.Text>.00</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
              <Col>
                <label htmlFor="basic-url">Max Hackers</label>

                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>#</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl onChange={handleTournamentMaxChange} aria-label="Amount (to the nearest dollar)" />
                </InputGroup>
              </Col>
            </Row>

            <br></br>

            <Link to="/Lobby">
              <Button onClick={handleCreateTournament} size="lg">Create MiniHack</Button>
            </Link>

          </Form>
        </Card.Body>
      </Card>
    </Container>
  )

}

export default CreateAMiniApp;