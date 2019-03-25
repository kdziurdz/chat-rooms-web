import {Subject} from 'rxjs'



class Connection {
    onMessage = new Subject();

    constructor(stompClient, room, userName) {
        this.stompClient = stompClient;
        this.room = room;
        this.userName = userName;
        this.subscribeIncomingMessages();
        this.joinRoom();
    }

    subscribeIncomingMessages() {
        this.incomingMessagesSubscription = this.stompClient
            .subscribe(`/topic/room.${this.room.id}`, this.onMessageReceived);
    }

    joinRoom() {
        this.stompClient.send(`/ws-api/topic/room.${this.room.id}.addUser`, {},
            JSON.stringify({
                plainText: this.userName
            }));
    }

    sendChatMessage(chatMessage) {
        this.stompClient.send(`/ws-api/topic/room.${this.room.id}.message`, {},
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