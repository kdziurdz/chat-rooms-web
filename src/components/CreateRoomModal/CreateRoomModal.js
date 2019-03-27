import React, {Component} from 'react';
import {Button, Col, Form, Modal} from "react-bootstrap";
import {Formik} from 'formik';
import * as yup from 'yup';
import createRoom from "../../lib/api/rooms/createRoom";
import {connect} from "react-redux";
import {refreshRooms} from "../../actions/room/refreshRooms"; // for everything

const schema = yup.object({
    name: yup.string().required()
});


class CreateRoomModal extends Component {
    handleSubmit = (values) => {
        createRoom(values.name, values.password)
            .then(() => {
                this.props.onClose();
                this.props.refreshRooms();
            });
    };

    render() {
        const {onClose} = this.props;
        return (
            <>
                <Modal show onHide={onClose}>
                    <Formik
                        validationSchema={schema}
                        onSubmit={this.handleSubmit}
                        initialValues={{
                            name: '',
                            password: '',
                        }}
                    >
                        {({
                              handleSubmit,
                              handleChange,
                              handleBlur,
                              values,
                              touched,
                              isValid,
                              errors,
                          }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Create new room</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    <Form.Row>
                                        <Form.Group as={Col} md="4" controlId="validationFormik01">
                                            <Form.Label>Room name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}
                                                isValid={touched.name && !errors.name}
                                            />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} md="4" controlId="validationFormik02">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                name="password"
                                                value={values.password}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Form.Row>


                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={onClose}>
                                        Cancel
                                    </Button>
                                    <Button variant="primary" type="submit">
                                        Create
                                    </Button>
                                </Modal.Footer>
                            </Form>
                        )}
                    </Formik>
                </Modal>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        refreshRooms: () => dispatch(refreshRooms())
    }
};

export default connect(
    null,
    mapDispatchToProps
)(CreateRoomModal);