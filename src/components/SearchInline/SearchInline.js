import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Form} from "react-bootstrap";
import {Formik} from "formik";

class SearchInline extends Component {
    render() {
        const {handleSubmit} = this.props;

        return (
            <Formik
                onSubmit={handleSubmit}
                initialValues={{
                    query: '',
                }}
            >
                {({
                      handleSubmit,
                      handleChange,
                      values
                  }) => (
                    <Form noValidate onSubmit={handleSubmit} className="w-100">
                        <Form.Group controlId="validationFormik01" className="mb-0">
                            <div className="d-flex">
                                <Form.Control
                                    type="text"
                                    name="query"
                                    placeholder="Search"
                                    value={values.query}
                                    onChange={handleChange}
                                />
                                <Button type="submit" className="ml-1" variant="outline-success">Search</Button>
                            </div>
                        </Form.Group>
                    </Form>
                )}
            </Formik>
        );
    }
}

SearchInline.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default SearchInline;