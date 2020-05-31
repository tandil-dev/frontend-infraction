import React from 'react';
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';

const MainTemplate = ({ children, appProps }) => (
  <>
    <NavBar {...appProps} />
    <div style={{ marginBottom: '60px' }}>
      {children}
    </div>
    <Footer {...appProps} />
  </>
);

export default MainTemplate;
