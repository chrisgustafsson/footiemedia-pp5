import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Col, Row, Container, Alert } from "react-bootstrap";
import axios from "axios";

const SignInForm = () => {
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/login/", signInData);
      // Assuming successful login, redirect to some other page
      history.push("/dashboard");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Row>
      <Col md={6}>
        <Container className="p-4">
          <h1>SIGN IN</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username && (
              <Alert variant="warning">{errors.username}</Alert>
            )}
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password && (
              <Alert variant="warning">{errors.password}</Alert>
            )}
            <Button variant="success" type="submit" size="lg" block>
              SIGN IN
            </Button>
            {errors.non_field_errors && (
              <Alert variant="warning" className="mt-3">
                {errors.non_field_errors}
              </Alert>
            )}
          </Form>
        </Container>
        <Container className="mt-3">
          <Link to="/signup">Don't have an account? Sign up</Link>
        </Container>
      </Col>
    </Row>
  );
};

export default SignInForm;