import React from 'react';
import {Button, ButtonToolbar, Col, Navbar, Row} from "react-bootstrap";

function Room() {
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <ButtonToolbar>
                        <div>&nbsp;</div>
                        <Button variant="primary">History</Button>
                        <div>&nbsp;</div>
                        <Button variant="secondary">Leave</Button>
                    </ButtonToolbar>
                </Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
        </React.Fragment>
    );
}

export default Room;