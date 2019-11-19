import React from "react";
import { connect } from 'react-redux';

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

function Profile({ currentUser }) {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={4}><h1 className='text-center'>Profile</h1></Col>
      </Row>
      <Row className="justify-content-center mt-2">
        <Col xs={4}>
          <p className="font-weight-bold text-center">{currentUser.profile.email}</p>
        </Col>
      </Row>
      <Row className="justify-content-center mt-1">
        <Col xs={4}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className='text-center'>Car ID</th>
            </tr>
          </thead>
          <tbody>
            {currentUser.profile.cars.map(car =>(
              <tr key={car}>
                <td key={car} className='text-uppercase text-center'>
                  {car}
                </td>
              </tr>))}
            </tbody>
          </Table>  
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps)(Profile);