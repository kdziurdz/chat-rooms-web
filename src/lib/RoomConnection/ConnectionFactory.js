import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
import Connection from "./Connection";

class ConnectionFactory {


    connect = (room, userName, token) => {
        return new Promise((resolve) => {
            const sock = new SockJS('/ws');
            const stompClient = Stomp.over(sock);
            stompClient.connect({'Authorization': token}, (frame) => {
                resolve(new Connection(stompClient, room, userName, token))
            });
        })
    }
}

export default new ConnectionFactory()