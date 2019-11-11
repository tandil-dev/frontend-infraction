import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from "react-router-bootstrap";

type PropsType = {
  isAuthenticated: Boolean
};

const StyledNavbar = (props: PropsType) => {
  function handleLogout() {
    props.userHasAuthenticated(false);
    props.history.push("/login");
  }
  
  return (
    <Navbar collapseOnSelect expand="lg" className="p-2">
        <Navbar.Brand>
          <LinkContainer to="/">
            <Nav.Item className="ml-5">Home</Nav.Item >
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          { props.isAuthenticated
            ? <Nav>
                <LinkContainer to="/profile">
                    <Nav.Item className="mr-1 link">Profile</Nav.Item>
                </LinkContainer>
                <Nav.Item onClick={handleLogout} className="mr-5">Logout</Nav.Item>
              </Nav>
            : <Nav>
               <LinkContainer to="/login">
                  <Nav.Item className="mr-1">Login</Nav.Item>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Nav.Item className="mr-5">Register</Nav.Item>
                </LinkContainer>
               
              </Nav>
          }
      </Navbar.Collapse>
    </Navbar>
  );
}

export default withRouter(StyledNavbar);