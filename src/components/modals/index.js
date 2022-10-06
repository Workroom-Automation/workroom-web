import React from "react";
import { Modal, ModalHeader } from "react-bootstrap";

export default function CustomModal({
  show = false,
  setShow = () => {},
  body: Body = null,
  footer: Footer = null,
  header: Header = null,
  style = {},
  size = "lg",
  className = "",
}) {
  return (
    <Modal
      style={style}
      centered
      size={size}
      show={show}
      onHide={() => setShow(false)}
      className={className}
    >
      {/* <Header/> */}
      {ModalHeader && (
        <Modal.Header style={{ border: "none" }}>
          <Header />
        </Modal.Header>
      )}

      {Body && (
        <Modal.Body className="py-0">
          <Body />
        </Modal.Body>
      )}
      {Footer && <Footer />}
    </Modal>
  );
}
