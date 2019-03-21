import React, {Component} from 'react';
import {Button, Form, FormControl, Navbar} from "react-bootstrap";

class RoomSearch extends Component {
    render() {
        return (
            <Navbar bg="light">
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar>
        );
    }
}

export default RoomSearch;