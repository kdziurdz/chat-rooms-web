import {Subject} from 'rxjs'

const CHAT = 'CHAT';

class Connection {
    onMessage = new Subject();

    constructor(stompClient, room, userName) {
        this.stompClient = stompClient;
        this.room = room;
        this.userName = userName;
        this.subscribeIncomingMessages();
    }

    subscribeIncomingMessages() {
        this.incomingMessagesSubscription = this.stompClient
            .subscribe('/topic/public', this.onMessageReceived);
    }

    joinRoom() {
        console.log('JOIN ROOM')
    }

    sendChatMessage(chatMessage) {
        this.stompClient.send("/ws-api/message", {},
            JSON.stringify({
                sender: this.userName,
                content: chatMessage,
                type: CHAT
            }));
    }

    onMessageReceived = (payload) => {
        this.onMessage.next({
            text: 'text wiadomosci',
            date: 'data',
            sender: 'sender',
        })
    }

    disconnect() {
        this.incomingMessagesSubscription.unsubscribe();
    }

}

export default Connection;