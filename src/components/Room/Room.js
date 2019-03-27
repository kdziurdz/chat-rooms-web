import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {clearRoomConnection} from "../../actions/room/storeRoomConnection";
import RoomHeader from "./RoomHeader/RoomHeader";
import Chat from "./Chat/Chat";
import RoomParticipants from "./RoomParticipants/RoomParticipants";
import {Col, Row} from "react-bootstrap";
import messageTypes from "./messageTypes";
import MessageFactory from "./MessageFactory";

class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            participants: []
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
        console.log('onMessageReceived', message)
        switch (message.type) {
            case messageTypes.MESSAGE: {
                this.onSingleMessageReceived(message);
                break;
            }
            case messageTypes.USER_JOINED: {
                this.onUserJoined(message);
                break;
            }
            case messageTypes.USER_DISCONNECTED: {
                this.onUserDisconnected(message);
                break;
            }
            case messageTypes.INIT: {
                this.onInit(message);
                break;
            }
            default: {
                console.error('Message type unknown')
            }
        }


    };

    onSingleMessageReceived = (message) => {
        this.setState((prevState) => ({
            messages: [...prevState.messages, MessageFactory.createTextMessage(message.content[0])]
        }))
    };

    onUserJoined = (message) => {
        const {participants} = this.state;
        const infoMessage = MessageFactory.createInfoMessage(message);
        const alreadyExist = !!participants.find(participant => participant.username === message.participant.username);

        this.setState((prevState) => ({
            messages: [...prevState.messages, infoMessage],
            participants: alreadyExist
                ? [...prevState.participants]
                : [...prevState.participants, message.participant]
        }))
    };

    onUserDisconnected = (message) => {
        const infoMessage = MessageFactory.createInfoMessage(message);
        this.setState((prevState) => ({
            messages: [...prevState.messages, infoMessage],
            participants: [...prevState.participants
                .filter(participant => participant.username !== message.participant.username)]
        }))
    };

    onInit = (message) => {
        this.setState((prevState) => ({
            messages: [...message.content
                .map(msg => MessageFactory.createTextMessage(msg)),
                ...prevState.messages],
            participants: message.participants
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
        const {messages, participants} = this.state;
        return (
            <React.Fragment>

                <RoomHeader room={roomConnection ? roomConnection.room : null}
                            onHistory={this.handleShowHistory}
                            onLeave={this.handleRoomLeave}
                            userName={roomConnection ? roomConnection.userName : null}/>
                {roomConnection && (
                    <Row>
                        <Col lg={8} xs={12}>
                            <Chat messages={messages} onMessageSend={this.handleMessageSend}/>
                        </Col>
                        <Col>
                            <RoomParticipants participants={participants}/>
                        </Col>
                    </Row>
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