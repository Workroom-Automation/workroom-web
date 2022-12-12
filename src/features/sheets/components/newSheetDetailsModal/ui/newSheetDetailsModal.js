import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import BillLineIcon from "remixicon-react/BillLineIcon";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";

export default function NewSheetDetailsModal(props) {
  const [sheetName, setSheetName] = useState(props.value.sheet?.name);
  const [sheetDescription, setSheetDescription] = useState(
    props.value.sheet?.description
  );

  return (
    <Modal {...props} size="md" style={{ marginTop: "200px" }}>
      <Modal.Header>
        <Modal.Title style={{ fontWeight: "bold" }}>
          <BillLineIcon style={{ marginBottom: "5px" }} />
          <span style={{ marginLeft: "10px" }}>New Sheet Details</span>
        </Modal.Title>
      </Modal.Header>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          props.value.onSubmitModal({
            name: sheetName,
            description: sheetDescription,
          });
        }}
      >
        <Modal.Body>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Sheet Name</Form.Label>
              <Form.Control
                defaultValue={sheetName}
                onChange={(e) => setSheetName(e.target.value)}
                placeholder="Sheet Name"
                required
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Sheet Description</Form.Label>
            <Form.Control
              defaultValue={sheetDescription}
              onChange={(e) => setSheetDescription(e.target.value)}
              placeholder="Sheet Description"
              required
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Asset</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Sub-Asset</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">Start Authoring</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
