import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, FormControl} from "react-bootstrap";

class MessageWriter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageValue: ''
        }
    }


    handleChange = (event) => {
        this.setState({messageValue: event.target.value});
    }

    handleSubmit = (event) => {
        const {onMessageSend} = this.props;
        onMessageSend(this.state.messageValue);
        this.setState({messageValue: ''});
        event.preventDefault();
    };

    render() {
        const {messageValue} = this.state;
        return (
            <div className="d-flex">
                <FormControl type="text" placeholder="Message" value={messageValue} onChange={this.handleChange}
                             className="mr-sm-2"/>
                <Button variant="outline-success" type="button" disabled={!messageValue} onClick={this.handleSubmit}>Send</Button>
            </div>
        );
    }
}

MessageWriter.propTypes = {
    onMessageSend: PropTypes.func.isRequired
};

export default MessageWriter;