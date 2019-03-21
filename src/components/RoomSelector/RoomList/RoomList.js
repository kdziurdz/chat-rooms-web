import React from 'react';
import axiosMain from "../../../lib/network/axiosMain";
import {ListGroup} from "react-bootstrap";

function RoomList() {

    const handleGetRooms = () => {
        console.log('get rooms');
        axiosMain.get('/api/1/rooms/')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    };

    const handleShowEnvVars = () => {
        console.log('handleShowEnvVars');
        console.log(process.env);
    };

    return (
        <ListGroup>
            <ListGroup.Item>
                <button onClick={handleGetRooms}>get rooms</button>
            </ListGroup.Item>
            <ListGroup.Item>
                <button onClick={handleShowEnvVars}>show env vars</button>
            </ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
    );
}

export default RoomList;