import React from 'react';
import PropTypes from 'prop-types';
import Message from "./Message/Message";

function Messages({messages}) {
    return (
        <>
            {messages.map((message, idx) => (
                <Message key={idx} message={message}/>
            ))}
        </>
    );
}

Messages.propTypes = {
    messages: PropTypes.array.isRequired
};

export default Messages;