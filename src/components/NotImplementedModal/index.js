import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

type PropsType = {
  title: String
}

function NotImplementedModal(props: PropsType) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{props.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{props.body}</Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={handleClose}>
        Ok
      </Button>
    </Modal.Footer>
    </Modal>
  );
}

NotImplementedModal.defaultProps = {
  title: 'Infraction app',
  body: 'Not implemented yet.'
};

export default NotImplementedModal;