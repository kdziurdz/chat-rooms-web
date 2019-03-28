import React, {Component} from 'react';
import {Navbar} from "react-bootstrap";
import {storeRoomQuery} from "../../../actions/room/storeRoomQuery";
import {fetchRooms} from "../../../actions/room/fetchRoom";
import {connect} from "react-redux";
import SearchInline from "../../SearchInline/SearchInline";

class RoomSearch extends Component {

    handleSubmit = (values) => {
        this.props.storeRoomQuery(values.query);
        this.props.fetchRooms();

    };

    render() {

        return (
            <Navbar bg="light">
                <SearchInline handleSubmit={this.handleSubmit}/>
            </Navbar>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        storeRoomQuery: (query) => dispatch(storeRoomQuery(query)),
        fetchRooms: () => dispatch(fetchRooms())
    }
};
export default connect(
    null,
    mapDispatchToProps
)(RoomSearch);