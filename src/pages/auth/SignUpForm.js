import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Col, Row, Container, Alert } from "react-bootstrap";
import axios from "axios";

const SignUpForm = () => {
    const [signUpData, setSignUpData] = useState({
        username: '',
        password1: '',
        password2: '',
    });
    const {username, password1, password2} = signUpData;

    const [errors, setErrors] = useState({});

    const history = useHistory();

    const handleChange = (event) => {
        setSignUpData({
          ...signUpData,
          [event.target.name]: event.target.value,
        });
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          await axios.post("/dj-rest-auth/registration/", signUpData);
          history.push("/signin");
        } catch (err) {
          setErrors(err.response?.data);
        }
      };

  return (
    <Row>
      <Col md={6}>
        <Container className="p-4">
          <h1>SIGN UP</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter your username" name="username" value={username} onChange={handleChange} />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Group controlId="password1">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Choose a password" name="password1" value={password1} onChange={handleChange} />
            </Form.Group>
            {errors.password1?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Form.Group controlId="password2">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" placeholder="Confirm your password" name="password2" value={password2} onChange={handleChange} />
            </Form.Group>
            {errors.password2?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Button variant="success" type="submit" size="lg" block>
              SIGN UP
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Container>
        <Container className="mt-3">
          <Link to="/signin">Already have an account? Sign in</Link>
        </Container>
      </Col>
    </Row>
  );
};

export default SignUpForm;