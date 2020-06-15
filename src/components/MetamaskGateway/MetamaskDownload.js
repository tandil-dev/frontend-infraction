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


const MetamaskDownload = ({ open, handleClose }) => (
  <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">Descargar Metamask</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Esta aplicación funciona con Metamask. <br />
        Instalá el complemento para continuar.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button href="https://metamask.io/download.html" color="primary" autoFocus>
        Descargar
      </Button>
    </DialogActions>
  </Dialog>
);

export default MetamaskDownload;
