import React from 'react';
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';

const MainTemplate = ({ children, appProps }) => (
  <>
    <NavBar {...appProps} />
    {children}
<<<<<<< HEAD
    <Footer {...appProps} />
=======
    <Footer />
>>>>>>> develop
  </>
);

export default MainTemplate;
