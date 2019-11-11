import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Profile() {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={1}><h1>Profile</h1></Col>
      </Row>
    </Container>
  );
}