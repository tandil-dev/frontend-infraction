/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';


const MetamaskDownload = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      onClick={handleClickOpen};
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Descargar Metamask</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Esta Aplicación requiere Metamask para funcionar correctamente. <br />
            Por favor instale Metamask en su navegador o ingrese con su email <br />
            y contraseña.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button href="https://metamask.io/download.html" color="primary" autoFocus>
            Descargar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MetamaskDownload;
