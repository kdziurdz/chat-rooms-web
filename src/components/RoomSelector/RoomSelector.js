import React from 'react';
import RoomSearch from "./RoomSearch/RoomSearch";
import RoomList from "./RoomList/RoomList";
import RoomCreator from "./RoomCreator/RoomCreator";
import './RoomSelector.scss'
import {Col, Row} from "react-bootstrap";

function RoomSelector() {
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <RoomSearch/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <RoomList/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <RoomCreator/>
                </Col>
            </Row>
        </React.Fragment>
    );
}
export default RoomSelector;