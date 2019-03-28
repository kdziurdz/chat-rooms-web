import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
import Connection from "./Connection";
import UrlProvider from "../network/UrlProvider";

class ConnectionFactory {


    connect = (room, userName, token) => {
        return new Promise((resolve) => {
            const sock = new SockJS(UrlProvider.withBaseUrl('/ws'));
            const stompClient = Stomp.over(sock);
            stompClient.connect({'Authorization': token}, (frame) => {
                resolve(new Connection(stompClient, room, userName, token))
            });
        })
    }
}

export default new ConnectionFactory()