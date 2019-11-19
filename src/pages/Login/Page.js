import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Page(props){
  const {
    email, password, onEmailChange, onPasswordChange, validateForm, handleSubmit,
  } = props;
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={1}><h1>Login</h1></Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col xs={4}>
          <form onSubmit={handleSubmit}>
            <Form.Group controlId="email" size="large">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={e => onEmailChange(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="password" size="large">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={e => onPasswordChange(e.target.value)}
                type="password"
              />
            </Form.Group>
            <Button block size="large" disabled={!validateForm()} type="submit">
              Login
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Page;