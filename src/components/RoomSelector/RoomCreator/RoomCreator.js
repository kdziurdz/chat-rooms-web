import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import CreateRoomModal from "../../CreateRoomModal/CreateRoomModal";

class RoomCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCreateModal: false
        }
    }

    openModal = () => {
        this.setState({showCreateModal: true})
    };

    closeModal = () => {
        this.setState({showCreateModal: false})
    };

    render() {
        const {showCreateModal} = this.state;
        return (
            <React.Fragment>
                <Button variant="secondary" onClick={this.openModal} block>Create</Button>
                {showCreateModal && (
                    <CreateRoomModal onClose={this.closeModal}/>
                )}
            </React.Fragment>
        );
    }
}

export default RoomCreator;