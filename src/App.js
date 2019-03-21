import React, {Component} from 'react';
import './App.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RoomSelector from "./components/RoomSelector/RoomSelector";
import Room from "./components/Room/Room";
import Provider from "react-redux/es/components/Provider";
import store from './store/store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <Container fluid className="chw-app">
                <Row noGutters>
                    <Col lg={4} xs={12}>
                        <RoomSelector/>
                    </Col>
                    <Col>
                        <Room/>
                    </Col>
                </Row>
            </Container>
            </Provider>
        );
    }
}

export default App;
