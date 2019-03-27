import React from 'react';
import PropTypes from 'prop-types';
import messageTypes from "../../../messageTypes";
import {Col, Row} from "react-bootstrap";
import './Message.scss';

function Message({message}) {
    let className = 'chc-message';
    if (message.type === messageTypes.MESSAGE) {
        const classToAdd = message.subtype === messageTypes.INCOMING
            ? ' chc-incoming'
            : ' chc-outgoing';
        className += classToAdd;
    } else if (message.type === messageTypes.INFO) {
        className += ' chc-info';
        const classToAdd = message.subtype === messageTypes.USER_JOINED
            ? ' chc-user-joined'
            : ' chc-user-disconnected';
        className += classToAdd;
    }
    console.warn('className', className);

    function getContent() {
        console.log('message', message);
        switch (message.subtype) {
            case messageTypes.OUTGOING:
            case messageTypes.INCOMING: {
                return message.message
            }
            case messageTypes.USER_JOINED: {
                return (
                    <span>User
                      <b>&nbsp;{message.username}&nbsp;</b>
                        joined room.
                    </span>
                )
            }
            case messageTypes.USER_DISCONNECTED: {
                return (
                    <span>User
                        <b>&nbsp;{message.username}&nbsp;</b>
                        disconnected room.
                    </span>
                )
            }
            default: {
                console.error('Cannot create message in message', message.subtype)
            }
        }
    }

    return (
        <React.Fragment>
            <Row>
                {message.authorName && (
                    <Col>
                        <span className="text-muted ml-2">{message.authorName}</span>
                    </Col>
                )}
            </Row>
            <div className={className}>
                <div className="chc-message-content">{getContent()}</div>
            </div>
        </React.Fragment>
    );
}

Message.propTypes = {
    message: PropTypes.shape({
        message: PropTypes.string,
        timestamp: PropTypes.string,
        authorName: PropTypes.string
    })
};

export default Message;

// {message.timestamp && (
//     <Col>
//         Time: {message.timestamp}
//     </Col>
// )}
