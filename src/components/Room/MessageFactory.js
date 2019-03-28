import React from 'react';
import messageTypes from "./messageTypes";

class MessageFactory {
    createInfoMessage(message) {
        const joined = message.type === messageTypes.USER_JOINED;
        return {
            className: joined ? 'chc-message chc-info chc-user-joined' : 'chc-message chc-info chc-user-disconnected',
            message: (
                <span>User
                      <b>&nbsp;{message.participant.username}&nbsp;</b>
                    {joined ? 'joined' : 'left room'}
                    </span>
            ),
            timestamp: message.timestamp,
            authorName: message.authorName,
        }

    }

    createTextMessage(message, actualUsername) {
        const result = {
            className: actualUsername === message.authorName ? 'chc-message chc-outgoing' : 'chc-message chc-incoming',
            message: message.message,
            timestamp: message.timestamp,
            authorName: message.authorName,
        };
        return result;

    }

    create(message, actualUsername) {
        switch (message.type) {
            case messageTypes.USER_JOINED:
            case messageTypes.USER_DISCONNECTED: {
                return this.createInfoMessage(message)
            }
            default: {
                return this.createTextMessage(message, actualUsername)
            }

        }
    }
}

export default new MessageFactory();