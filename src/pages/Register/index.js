import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NotImplementedModal from '../../components/NotImplementedModal';

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.userHasAuthenticated(false);
    setShowModal(true);
  }

  return (
    <Container>
      { showModal && <NotImplementedModal />}
      <Row className="justify-content-center mt-5">
        <Col xs={4}>
          <form onSubmit={handleSubmit}>
            <Form.Group controlId="email" size="large">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="password" size="large">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={e => setPassword(e.target.value)}
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
}

export default Register;