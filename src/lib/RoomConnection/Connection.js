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
            .subscribe('/topic/public', this.onMessageReceived);
    }

    joinRoom() {
        this.stompClient.send("/ws-api/add-user", {},
            JSON.stringify({
                plainText: this.userName
            }));
    }

    sendChatMessage(chatMessage) {
        this.stompClient.send("/ws-api/message", {},
            JSON.stringify({
                plainText: chatMessage
            }));
    }

    onMessageReceived = (payload) => {
        this.onMessage.next({
            text: 'text wiadomosci',
            date: 'data',
            sender: 'sender',
        })
    };

    disconnect() {
        this.incomingMessagesSubscription.unsubscribe();
    }

}

export default Connection;