import React from 'react';
import Container from '@material-ui/core/Container';
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';

const MainTemplate = ({ children, appProps }) => (
  <Container>
    <NavBar {...appProps} />
    {children}
    <Footer />
  </Container>
);

export default MainTemplate;
