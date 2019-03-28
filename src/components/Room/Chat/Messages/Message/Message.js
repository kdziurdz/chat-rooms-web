import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from "react-bootstrap";
import './Message.scss';

function Message({message}) {
    return (
        <React.Fragment>
            <Row>
                {message.authorName && (
                    <Col>
                        <span className="text-muted ml-2">{message.authorName}</span>
                    </Col>
                )}
            </Row>
            <div className={message.className}>
                <div className="chc-message-content">{message.message}</div>
            </div>
        </React.Fragment>
    );
}

Message.propTypes = {
    message: PropTypes.shape({
        message: PropTypes.any,
        timestamp: PropTypes.string,
        authorName: PropTypes.string,
        className: PropTypes.string
    })
};

export default Message;

// {message.timestamp && (
//     <Col>
//         Time: {message.timestamp}
//     </Col>
// )}
