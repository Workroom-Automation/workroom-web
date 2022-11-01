import React from "react";
import { Modal, ModalHeader } from "react-bootstrap";
import './style.css'
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
      {Header && (
        <Modal.Header style={{ border: "none" }}>
         <Header/>
        </Modal.Header>
      )}

      {Body && (
        <Modal.Body style={{borderRadius:"11px"}} className="p-0">
          <Body />
        </Modal.Body>
      )}
      {Footer && <Footer />}
    </Modal>
  );
}
