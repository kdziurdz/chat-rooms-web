import React, {Component} from 'react';
import {Button, Modal} from "react-bootstrap";
import PropTypes from "prop-types";
import SearchInline from "../SearchInline/SearchInline";
import getMessages from "../../lib/api/rooms/getMessages";
import Messages from "../Room/Chat/Messages/Messages";
import MessageFactory from "../Room/MessageFactory";

class MessageHistoryModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
    }


    handleSearchSubmit = (values) => {

        const {room} = this.props;
        getMessages(room.id, values.query)
            .then(({data}) => {
                this.setState({messages: data.map(msg => MessageFactory.create(msg))})
            });
    };

    render() {
        const {onClose} = this.props;
        const {messages} = this.state;
        return (
            <>
                <Modal show onHide={onClose}>
                    <Modal.Header closeButton>
                        <SearchInline handleSubmit={this.handleSearchSubmit}/>
                    </Modal.Header>
                    <Modal.Body>
                        <Messages messages={messages}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={onClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

MessageHistoryModal.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        hasPassword: PropTypes.bool.isRequired,
        id: PropTypes.string.isRequired
    }).isRequired,
    onClose: PropTypes.func.isRequired
};

export default MessageHistoryModal