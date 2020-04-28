import React from 'react';
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';

const MainTemplate = ({ children, appProps }) => (
  <>
    <NavBar {...appProps} />
    {children}
    <Footer {...appProps} />
  </>
);

export default MainTemplate;
