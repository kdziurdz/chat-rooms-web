import React, {Component} from 'react';
import {ListGroup} from "react-bootstrap";
import {connect} from 'react-redux'
import {fetchRooms} from "../../../actions/room/fetchRoom";

class RoomList extends Component {
    render() {

        const handleGetRooms = () => {
            this.props.fetchRooms();
        };

        const handleShowEnvVars = () => {
            console.log('handleShowEnvVars');
            console.log(process.env);
        };

        const {rooms} = this.props;
        return (
            <ListGroup>
                <ListGroup.Item>
                    <button onClick={handleGetRooms}>get rooms</button>
                </ListGroup.Item>
                <ListGroup.Item>
                    <button onClick={handleShowEnvVars}>show env vars</button>
                </ListGroup.Item>
                {rooms.map(room => (
                    <ListGroup.Item key={room.id}>{room.name}</ListGroup.Item> // TODO ID!
                ))}
                <ListGroup.Item>OSTATNI</ListGroup.Item>
            </ListGroup>
        );
    }
}

const mapStateToProps = state => {
    return {
        rooms: state.rooms
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchRooms: () => dispatch(fetchRooms())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RoomList);