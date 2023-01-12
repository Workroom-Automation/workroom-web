import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import PrimaryButton from "../../../../../common/crunches/primaryButton/primaryButton.js";

export default function StationDetailsModal(props) {
  let station = props.value.selectedStation;
  const [stationName, setStationName] = useState("");
  const [stationDescription, setStationDescription] = useState("");
  const [stationCode, setStationCode] = useState("");
  const [stationImage, setStationImage] = useState([]);

  useEffect(() => {
    setStationName(station?.name);
    setStationCode(station?.station_code);
    setStationDescription(station?.description);
  }, [props.value.selectedStation]);
  return (
    <Modal
      show={props.value.show}
      onHide={props.value.onHide}
      style={{ marginTop: "150px" }}
    >
      <Modal.Header closeButton>
        <Modal.Title style={{ fontWeight: "bold" }}>
          <span style={{ marginLeft: "10px" }}>Edit Station Details</span>
        </Modal.Title>
      </Modal.Header>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          props.value.onSubmitModal({
            name: stationName,
            description: stationDescription,
            station_code: stationCode,
          });
          props.value.onHide();
        }}
      >
        <Modal.Body>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Station Name</Form.Label>
              <Form.Control
                value={stationName}
                onChange={(e) => setStationName(e.target.value)}
                placeholder="Station Name"
                required
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Station Description</Form.Label>
              <Form.Control
                value={stationDescription}
                onChange={(e) => setStationDescription(e.target.value)}
                placeholder="Station Description"
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Station Code</Form.Label>
            <Form.Control
              value={stationCode}
              onChange={(e) => setStationCode(e.target.value)}
              placeholder="Station Code"
            />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload station Image</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer style={{ justifyContent: "center" }}>
          <PrimaryButton
            value={{
              type: "submit",
              child: "Save Station",
              style: { padding: "7px 10px 7px 10px" },
            }}
          />
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
