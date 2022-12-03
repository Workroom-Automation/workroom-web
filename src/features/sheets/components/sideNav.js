import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "../styles/sideNav.module.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import React, { useState } from "react";
import ListSettingsLineIcon from "remixicon-react/ListSettingsLineIcon";
import ArrowDownSLineIcon from "remixicon-react/ArrowDownSLineIcon";
import Settings6LineIcon from "remixicon-react/Settings6LineIcon";
import FlashlightLineIcon from "remixicon-react/FlashlightLineIcon";
import Triggers from "./triggers.js";

export default function SideNav(props) {
  const [openCollapse1, setOpenCollapse1] = useState(false);
  const [openCollapse2, setOpenCollapse2] = useState(false);
  const [openCollapse3, setOpenCollapse3] = useState(false);

  return (
    <Offcanvas
      id={styles.sideNav}
      show={props.value.show}
      onHide={() => props.value.onToggle(false)}
      placement="end"
      // scroll={true}
      // backdrop={false}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <div id={styles.sectorNo}>Sector - {props.value.sectionNumber}</div>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              {props.value.selectedField?.icon}
            </InputGroup.Text>
            <Form.Control
              placeholder="Field Name"
              aria-label="Field Name"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Form.Group className="mb-3">
            <Form.Label>Field Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Label>References</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control />
            <Button variant="outline-secondary" id="button-addon2">
              Attach Reference
            </Button>
          </InputGroup>
          <Form.Label>Field Details</Form.Label>
          <Form.Group className="mb-3">
            <Button
              id={styles.collapseButton}
              onClick={() => setOpenCollapse1(!openCollapse1)}
              aria-controls="example-collapse-text"
              aria-expanded={openCollapse1}
            >
              <ListSettingsLineIcon color="#7D7676" />
              <span style={{ marginLeft: "10px" }}>Field Properties</span>
              <ArrowDownSLineIcon
                color="#7D7676"
                style={{ float: "right", marginTop: "3px" }}
              />
            </Button>
            <Collapse in={openCollapse1}>
              <div id="example-collapse-text">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </div>
            </Collapse>
          </Form.Group>
          <Form.Group className="mb-3">
            <Button
              id={styles.collapseButton}
              onClick={() => setOpenCollapse2(!openCollapse2)}
              aria-controls="example-collapse-text"
              aria-expanded={openCollapse2}
            >
              <Settings6LineIcon color="#7D7676" />
              <span style={{ marginLeft: "10px" }}>Validations</span>
              <ArrowDownSLineIcon
                color="#7D7676"
                style={{ float: "right", marginTop: "3px" }}
              />
            </Button>
            <Collapse in={openCollapse2}>
              <div id="example-collapse-text">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </div>
            </Collapse>
          </Form.Group>
          <Form.Group className="mb-3">
            <Button
              id={styles.collapseButton}
              onClick={() => setOpenCollapse3(!openCollapse3)}
              aria-controls="example-collapse-text"
              aria-expanded={openCollapse3}
            >
              <FlashlightLineIcon color="#7D7676" />
              <span style={{ marginLeft: "10px" }}>Triggers</span>
              <ArrowDownSLineIcon
                color="#7D7676"
                style={{ float: "right", marginTop: "3px" }}
              />
            </Button>
            <Collapse in={openCollapse3}>
              <div id="example-collapse-text">
                <Triggers />
              </div>
            </Collapse>
          </Form.Group>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
