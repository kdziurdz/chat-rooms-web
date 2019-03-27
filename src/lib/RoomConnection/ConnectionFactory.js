import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
import Connection from "./Connection";

const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImV4cCI6MTU1NDQ2Mjc3OH0.29pAwypDT3MQLOLz70IRSSoPbddo8FwaIGCL7Nv1_4o-eQTPNDEC6zfzSTJeqFqOcIqKSuzj7cZUPxUzfv9Qiw';

class ConnectionFactory {


    connect = (room, userName) => {
        return new Promise((resolve, reject) => {
            const sock = new SockJS('/ws');
            const stompClient = Stomp.over(sock);
            stompClient.connect({'Authorization': token}, (frame) => {
                const urlSegments = sock._transport.url.split("/");
                const sessionId = urlSegments[urlSegments.length - 2];

                resolve(new Connection(stompClient, room, userName, token, sessionId))
            });
        })
    }
}

export default new ConnectionFactory()