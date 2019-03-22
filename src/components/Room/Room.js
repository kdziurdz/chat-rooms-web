import React from 'react';
import {Button, ButtonToolbar, Card, Col, Form, FormControl, Navbar, Row} from "react-bootstrap";

function Room() {
    return (
        <React.Fragment>
            <Navbar bg="light">
                <Navbar.Brand href="#home">roomName - you've joined as userName</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <ButtonToolbar>
                        <div>&nbsp;</div>
                        <Button variant="primary">History</Button>
                        <div>&nbsp;</div>
                        <Button variant="secondary">Leave</Button>
                    </ButtonToolbar>
                </Navbar.Collapse>
            </Navbar>
            <Row>
                <Col>
                    <Card className="m-3">
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary" block>Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>


    );
}

export default Room;