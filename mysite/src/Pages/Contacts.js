import React, { Component } from "react";
import {Form, Container, Button} from "react-bootstrap";


export default class Contacts extends Component {
    render() {
        return (
            <Container style={{ width: "1000px" }}>
                <h1> Contact Us</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email adress</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                            <Form.Text>
                                We`ll never share your email with anyone else
                            </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicMessage">
                        <Form.Label>Example Textarea</Form.Label>
                        <Form.Control as="textarea" rows="5" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary"type="submit">Submit</Button>
                </Form>
            </Container>
        )
    }
}