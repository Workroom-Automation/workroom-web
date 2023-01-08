import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import PrimaryButton from "../../../../../common/crunches/primaryButton/primaryButton.js";

export default function AddProductModal(props) {
  const [productName, setProductName] = useState("");
  const [productCode, setProductCode] = useState("");
  const [productImage, setProductImage] = useState([]);
  useEffect(() => {
    if (props.value.isEdit) {
      setProductName(props.value.productDetails?.name);
      setProductCode(props.value.productDetails?.code);
    }
  }, [props.value.show]);
  const onCloseModal = () => {
    setProductName("");
    setProductCode("");
    setProductImage([]);
    props.value.onHide();
    props.value.removeEdit();
  };
  return (
    <Modal
      show={props.value.show}
      onHide={onCloseModal}
      style={{ marginTop: "150px" }}
    >
      <Modal.Header closeButton>
        <Modal.Title style={{ fontWeight: "bold" }}>
          <span style={{ marginLeft: "10px" }}>
            {props.value.isEdit
              ? "Edit Product Details"
              : "New Product Details"}
          </span>
        </Modal.Title>
      </Modal.Header>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          if (props.value.isEdit) {
            props.value.onEditModal({
              name: productName,
              code: productCode,
            });
          } else {
            props.value.onSubmitModal({
              name: productName,
              code: productCode,
            });
          }
          onCloseModal();
        }}
      >
        <Modal.Body>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                defaultValue={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Product Name"
                required
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Product Code</Form.Label>
            <Form.Control
              defaultValue={productCode}
              onChange={(e) => setProductCode(e.target.value)}
              placeholder="Product Code"
            />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload Product Image</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer style={{ justifyContent: "center" }}>
          <PrimaryButton
            value={{
              type: "submit",
              child: props.value.isEdit ? "Save Changes" : "Create Product",
              style: { padding: "7px 10px 7px 10px" },
            }}
          />
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
