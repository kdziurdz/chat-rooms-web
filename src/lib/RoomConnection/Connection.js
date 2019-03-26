import {Subject} from 'rxjs'



class Connection {
    onMessage = new Subject();

    constructor(stompClient, room, userName, token) {
        this.stompClient = stompClient;
        this.room = room;
        this.userName = userName;
        this.token = token;
        this.subscribeIncomingMessages();
        this.joinRoom();
    }

    subscribeIncomingMessages() {
        this.incomingMessagesSubscription = this.stompClient
            .subscribe(`/topic/room.${this.room.id}`, this.onMessageReceived, {'Authorization': this.token});
    }

    joinRoom() {
        this.stompClient.send(`/ws-api/topic/room.${this.room.id}.addUser`, {'Authorization': this.token},
            JSON.stringify({
                plainText: this.userName
            }));
    }

    sendChatMessage(chatMessage) {
        this.stompClient.send(`/ws-api/topic/room.${this.room.id}.message`, {'Authorization': this.token},
            JSON.stringify({
                plainText: chatMessage
            }));
    }

    onMessageReceived = (payload) => {
        const parsedMessage = JSON.parse(payload.body);
        console.log(parsedMessage);
        this.onMessage.next(parsedMessage)
    };

    disconnect() {
        this.incomingMessagesSubscription.unsubscribe();
    }

}

export default Connection;