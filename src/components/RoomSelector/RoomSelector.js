import React, {Component} from 'react';
import RoomSearch from "./RoomSearch/RoomSearch";
import RoomList from "./RoomList/RoomList";
import RoomCreator from "./RoomCreator/RoomCreator";
import './RoomSelector.scss'
import {connect} from "react-redux";
import {storeRoomConnection} from "../../actions/room/storeRoomConnection";

class RoomSelector extends Component {

    handleConnectionEstablished = (connection) => {
        this.props.storeRoomConnection(connection)
    };

    render() {
        return (
            <React.Fragment>
                <RoomSearch/>
                <RoomList handleConnectionEstablished={this.handleConnectionEstablished}/>
                <RoomCreator/>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        storeRoomConnection: (connection) => dispatch(storeRoomConnection(connection))
    }
};

export default connect(
    null,
    mapDispatchToProps
)(RoomSelector);