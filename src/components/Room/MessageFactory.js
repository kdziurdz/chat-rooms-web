import messageTypes from "./messageTypes";

class MessageFactory {
    createTextMessage(message, actualUsername) {
        return {
            type: messageTypes.MESSAGE,
            subtype: actualUsername === message.authorName ? messageTypes.OUTGOING : messageTypes.INCOMING,
            message: message.message,
            timestamp: message.timestamp,
            authorName: message.authorName,
            id: message.id
        }
    }

    createInfoMessage(message) {
        switch (message.type) {
            case messageTypes.USER_JOINED:
            case messageTypes.USER_DISCONNECTED: {
                return {
                    type: messageTypes.INFO,
                    subtype: message.type,
                    username: message.participant.username,
                    timestamp: message.timestamp
                };
            }
            default: {
                console.error('Type unknown', message.type);
            }
        }
    }
}

export default new MessageFactory();