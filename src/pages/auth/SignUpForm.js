import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

const SignUpForm = () => {
  return (
    <Row>
      <Col md={6}>
        <Container className="p-4">
          <h1>SIGN UP</h1>
          <Form>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter your username" name="username" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword1">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Choose a password" name="password1" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword2">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" placeholder="Confirm your password" name="password2" />
            </Form.Group>
            <Button variant="success" type="submit" size="lg" block>
              SIGN UP
            </Button>
          </Form>
        </Container>
        <Container className="mt-3">
          <Link className="login-link" to="/signin">Already have an account? Sign in</Link>
        </Container>
      </Col>
    </Row>
  );
};

export default SignUpForm;