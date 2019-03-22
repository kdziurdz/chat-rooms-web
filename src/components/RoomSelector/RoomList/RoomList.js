import React, {Component} from 'react';
import {Card, ListGroup} from "react-bootstrap";
import {connect} from 'react-redux'
import {fetchRooms} from "../../../actions/room/fetchRoom";
import JoinRoomModal from "../../JoinRoomModal/JoinRoomModal";

class RoomList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showJoinRoomModal: false,
            selectedRoom: null
        }
    }

    componentDidMount() {
        this.props.fetchRooms();
    }

    handleRoomClicked = (room) => {
        this.setState({showJoinRoomModal: true, selectedRoom: room});
    };

    closeModal = () => {
        this.setState({showJoinRoomModal: false});
    };

    render() {
        const {rooms} = this.props;
        const {showJoinRoomModal, selectedRoom} = this.state;
        return (
            <Card className="m-3">
                <ListGroup variant="flush">
                    {rooms.map(room => (
                        <ListGroup.Item onClick={() => this.handleRoomClicked(room)}
                                        style={{cursor: 'pointer'}}
                                        key={room.id}>{room.name}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                {showJoinRoomModal && selectedRoom && (
                    <JoinRoomModal onClose={this.closeModal} room={selectedRoom}/>
                )}
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