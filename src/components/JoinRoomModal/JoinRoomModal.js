import React, {Component} from 'react';
import {Button, Col, Form, Modal} from "react-bootstrap";
import {Formik} from 'formik';
import * as yup from 'yup';
import PropTypes from "prop-types";

const schema = yup.object({
    name: yup.string().required()
});


class JoinRoomModal extends Component {

    handleSubmit = (values) => {
        console.log('handleSubmit', values)
    };

    render() {
        const {onClose, room} = this.props;
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
                                    <Modal.Title>Join room {room.name}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>

                                    <Form.Row>
                                        <Form.Group as={Col} md="4" controlId="validationFormik01">
                                            <Form.Label>Your name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}
                                                isValid={touched.name && !errors.name}
                                            />
                                        </Form.Group>
                                    </Form.Row>
                                    {room.hasPassword && (
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
                                    )}


                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={onClose}>
                                        Cancel
                                    </Button>
                                    <Button variant="primary" type="submit">
                                        Join
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

JoinRoomModal.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        hasPassword: PropTypes.bool.isRequired,
        id: PropTypes.string.isRequired
    }),
    onClose: PropTypes.func.isRequired
};

export default JoinRoomModal