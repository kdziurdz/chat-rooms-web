import React, {Component} from 'react';
import {Card, ListGroup} from "react-bootstrap";
import {connect} from 'react-redux'
import {fetchRooms} from "../../../actions/room/fetchRoom";

class RoomList extends Component {
    componentDidMount() {
        this.props.fetchRooms();
    }

    render() {
        const {rooms} = this.props;
        return (
            <Card className="m-3">
                <ListGroup variant="flush">
                    {rooms.map(room => (
                        <ListGroup.Item key={room.id}>{room.name}</ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
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