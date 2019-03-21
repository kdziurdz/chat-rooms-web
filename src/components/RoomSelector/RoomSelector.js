import React from 'react';
import RoomSearch from "./RoomSearch/RoomSearch";
import RoomList from "./RoomList/RoomList";
import RoomCreator from "./RoomCreator/RoomCreator";
import './RoomSelector.scss'

function RoomSelector() {
    return (
        <React.Fragment>
            <RoomSearch/>
            <RoomList/>
            <RoomCreator/>
        </React.Fragment>
    );
}
export default RoomSelector;