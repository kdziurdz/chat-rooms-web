import React from 'react';
import PropTypes from 'prop-types';

function Message({message}) {
    return (
        <div style={{border: '1px solid blue', margin: '10px', padding: '10px'}}>
            <div>{`sender: ${message.sender}`}</div>
            <div>{`text: ${message.text}`}</div>
            <div>{`date: ${message.date}`}</div>
        </div>
    );
}

Message.propTypes = {
    message: PropTypes.shape({
        text: PropTypes.string,
        date: PropTypes.string,
        sender: PropTypes.string,
    })
};

export default Message;