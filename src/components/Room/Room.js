import React, {Component} from 'react';
import {Card} from "react-bootstrap";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {clearRoomConnection} from "../../actions/room/storeRoomConnection";
import RoomHeader from "./RoomHeader/RoomHeader";
import Messages from "./Messages/Messages";
import MessageWriter from "./MessageWriter/MessageWriter";

class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const {roomConnection} = this.props;
        if (prevProps.roomConnection && !roomConnection) {
            this.onMessage.unsubscribe();
            this.setState({messages: []})
        } else if (!prevProps.roomConnection && roomConnection) {
            this.onMessage = roomConnection.onMessage.subscribe(this.onMessageReceived)
        }
    }

    onMessageReceived = (message) => {
        this.setState((prevState) => ({
            messages: [...prevState.messages, message]
        }))
    };


    handleRoomLeave = () => {
        const {roomConnection, clearRoomConnection} = this.props;
        roomConnection.disconnect();
        clearRoomConnection();
    };
    handleShowHistory = () => {
        console.log('handleShowHistory')
    };

    handleMessageSend = (message) => {
        const {roomConnection} = this.props;
        roomConnection.sendChatMessage(message);
    };

    render() {
        const {roomConnection} = this.props;
        const {messages} = this.state;
        return (
            <React.Fragment>
                <RoomHeader room={roomConnection ? roomConnection.room : null}
                            onHistory={this.handleShowHistory}
                            onLeave={this.handleRoomLeave}
                            userName={roomConnection ? roomConnection.userName : null}/>
                {roomConnection && (
                    <Card className="m-3">
                        <Card.Body>
                            <Messages messages={messages}/>
                        </Card.Body>
                        <Card.Footer>
                            <MessageWriter onMessageSend={this.handleMessageSend}/>
                        </Card.Footer>
                    </Card>
                )}
            </React.Fragment>


        );
    }
}

const mapStateToProps = state => {
    return {
        roomConnection: state.roomConnection
    }
};

const mapDispatchToProps = dispatch => {
    return {
        clearRoomConnection: () => dispatch(clearRoomConnection())
    }
};

Room.propTypes = {
    roomConnection: PropTypes.object
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Room);