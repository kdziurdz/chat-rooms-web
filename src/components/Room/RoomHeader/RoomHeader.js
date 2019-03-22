import React from 'react';
import {Button, ButtonToolbar, Navbar} from "react-bootstrap";
import PropTypes from 'prop-types';

function RoomHeader({room, onLeave, onHistory, userName}) {
    return (
        <Navbar bg="light">
            <Navbar.Brand href="#home">
                {room && (
                    `${room.name} - you've joined as ${userName}`
                )}
                {!room && (
                    'Select room to join or create your own room'
                )}
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
                <ButtonToolbar>
                    <div>&nbsp;</div>
                    <Button variant="primary" disabled={!room} onClick={onHistory}>History</Button>
                    <div>&nbsp;</div>
                    <Button variant="secondary" disabled={!room} onClick={onLeave}>Leave</Button>
                </ButtonToolbar>
            </Navbar.Collapse>
        </Navbar>
    );
}

RoomHeader.propTypes = {
    room: PropTypes.object,
    userName: PropTypes.string,
    onLeave: PropTypes.func.isRequired,
    onHistory: PropTypes.func.isRequired
};

export default RoomHeader;