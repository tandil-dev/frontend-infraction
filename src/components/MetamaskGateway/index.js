import React from 'react';
import MetamaskDownload from './MetamaskDownload';

const MetamaskGateway = ({ children }) => {
  const isWeb3Browser = !!window.ethereum;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return isWeb3Browser
    ? children
    : (
      <>
        {React.Children.map(children, (child) => React.cloneElement(child, {
          onClick: handleClickOpen,
        }))}
        <MetamaskDownload open={open} handleClose={handleClose} />
      </>
    );
};

export default MetamaskGateway;
