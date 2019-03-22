import React, {Component} from 'react';
import {Card, ListGroup} from "react-bootstrap";
import {connect} from 'react-redux'
import {fetchRooms} from "../../../actions/room/fetchRoom";
import JoinRoomModal from "../../JoinRoomModal/JoinRoomModal";
import PropTypes from 'prop-types';

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
        this.setState({showJoinRoomModal: false, selectedRoom: null});
    };
    handleConnectionEstablished = (connection) => {
        this.props.handleConnectionEstablished(connection);
        this.closeModal();
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
                    <JoinRoomModal
                        onConnectionEstablished={this.handleConnectionEstablished}
                        onClose={this.closeModal}
                        room={selectedRoom}/>
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

RoomList.propTypes = {
    handleConnectionEstablished: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RoomList);