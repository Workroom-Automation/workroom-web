import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import PrimaryButton from "../../../../../common/crunches/primaryButton/primaryButton.js";
import Multiselect from "multiselect-react-dropdown";

export default function AddProcessModal(props) {
  const [processName, setProcessName] = useState("");
  const [processDescription, setProcessDescription] = useState("");
  const [processCode, setProcessCode] = useState("");
  const [productImage, setProductImage] = useState();
  const [selectedStations, setSelectedStations] = useState([]);

  return (
    <Modal
      show={props.value.show}
      onHide={props.value.onHide}
      style={{ marginTop: "150px" }}
    >
      <Modal.Header closeButton>
        <Modal.Title style={{ fontWeight: "bold" }}>
          <span style={{ marginLeft: "10px" }}>New Process Details</span>
        </Modal.Title>
      </Modal.Header>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          props.value.onSubmitModal({
            process_name: processName,
            process_description: processDescription,
            stations: selectedStations,
          });
        }}
      >
        <Modal.Body>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Process Name</Form.Label>
              <Form.Control
                onChange={(e) => setProcessName(e.target.value)}
                placeholder="Process Name"
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Process Description</Form.Label>
              <Form.Control
                onChange={(e) => setProcessDescription(e.target.value)}
                placeholder="Process Description"
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Process Code</Form.Label>
            <Form.Control
              onChange={(e) => setProcessCode(e.target.value)}
              placeholder="Process Code"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Link Stations</Form.Label>
            <Multiselect
              avoidHighlightFirstOption={true}
              options={
                props.value.stationList.data == null
                  ? []
                  : props.value.stationList.data
              }
              closeIcon="cancel"
              placeholder="Link Stations"
              showArrow={true}
              closeOnSelect={false}
              displayValue="name"
              onRemove={(list, item) => {
                let a = selectedStations.filter((i) => {
                  if (item.id != i) return i;
                });
                setSelectedStations(a);
              }}
              onSelect={(list, item) => {
                setSelectedStations([...selectedStations, item.id]);
              }}
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer style={{ justifyContent: "center" }}>
          <PrimaryButton
            value={{
              type: "submit",
              child: "Create Process",
              style: { padding: "7px 10px 7px 10px" },
            }}
          />
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
