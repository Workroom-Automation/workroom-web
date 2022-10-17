import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./style.css";
export default function CustomAccordion({ 
  title = "",
  bodyComponent: BodyComponent= () => {},
 }) {
  return (
    <div className="custom-accordion">
      <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {title}
          </Accordion.Header>
          <Accordion.Body>
            <BodyComponent />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
