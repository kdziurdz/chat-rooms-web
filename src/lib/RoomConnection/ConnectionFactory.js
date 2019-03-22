import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
import Connection from "./Connection";

class ConnectionFactory {


    connect = (room, userName) => {
        return new Promise((resolve, reject) => {
            const sock = new SockJS('/ws');
            const stompClient = Stomp.over(sock);
            stompClient.connect({}, (frame) => {
                resolve(new Connection(stompClient, room, userName))
                // console.log('Connected: ' + frame);
            });
        })
    }
}

export default new ConnectionFactory()