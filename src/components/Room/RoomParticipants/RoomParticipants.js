import React from 'react';
import PropTypes from 'prop-types';
import {Card, ListGroup} from "react-bootstrap";

function RoomParticipants({participants}) {
    return (
        <Card className="my-3">
            <Card.Header>
                Participants
            </Card.Header>
                <ListGroup variant="flush">
                    {participants.map(participant => (
                        <ListGroup.Item key={participant.username}>
                            {participant.username}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
        </Card>
    );
}

RoomParticipants.propTypes = {
    participants: PropTypes.array.isRequired
};

export default RoomParticipants;