import styles from "../../../styles/processAccordion.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import More2LineIcon from "remixicon-react/More2LineIcon";
import MoreLineIcon from "remixicon-react/MoreLineIcon";
import AddLineIcon from "remixicon-react/AddLineIcon";
import ArrowDownSLineIcon from "remixicon-react/ArrowDownSLineIcon";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

export default function ProcessAccordion(props) {
  let processDetails = props.value.processDetails;
  return (
    <Accordion.Item eventKey={processDetails.id}>
      <div style={{ padding: "10px 15px 0px 0px" }}>
        <MoreLineIcon
          style={{
            float: "right",
            color: "#7D7676",
            cursor: "pointer",
          }}
        />
      </div>
      <Accordion.Header>
        <Col md={8} style={{ fontWeight: "bold" }}>
          {processDetails.process_name}
        </Col>
        <Col md={3}>
          Linked Stations :{" "}
          <span id={styles.processDetailsCount}>
            {processDetails.stations.length >= 10
              ? processDetails.stations.length
              : `0${processDetails.stations.length}`}
          </span>
        </Col>
      </Accordion.Header>
      <Accordion.Body style={{ textAlign: "left" }}>
        <div>
          Description :{" "}
          <span style={{ fontWeight: "bold" }}>
            {processDetails.process_description}
          </span>
        </div>
        <hr />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            Apps Linked : <span style={{ fontWeight: "bold" }}>00</span>
          </div>
          <div>
            Sheets Linked : <span style={{ fontWeight: "bold" }}>00</span>
          </div>
        </div>
        <hr />

        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          Linked Stations :{" "}
          {processDetails.stations.map((item) => {
            return (
              <div
                key={item.id}
                style={{
                  marginTop: "-5px",
                  border: "1px solid #dadada",
                  padding: "3px 5px 3px 5px",
                  borderRadius: "10px",
                }}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}
