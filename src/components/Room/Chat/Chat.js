import React from 'react';
import {Card} from "react-bootstrap";
import PropTypes from 'prop-types';
import MessageWriter from "./MessageWriter/MessageWriter";
import Messages from "./Messages/Messages";


function Chat({messages, onMessageSend}) {
    return (
        <Card className="mx-1 my-3">
            <Card.Body>
                <Messages messages={messages}/>
            </Card.Body>
            <Card.Footer>
                <MessageWriter onMessageSend={onMessageSend}/>
            </Card.Footer>
        </Card>
    );
}

Chat.propTypes = {
    onMessageSend: PropTypes.func.isRequired,
    messages: PropTypes.array.isRequired
};

export default Chat;