import React from 'react';
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Container from 'react-bootstrap/Container';

type PropsType = {
  children: React$Node
};

const MainTemplate = ({ children, appProps }: PropsType) => (
  <Container>
    <NavBar {...appProps} />
      {children}
    <Footer />
  </Container>
);

export default MainTemplate;