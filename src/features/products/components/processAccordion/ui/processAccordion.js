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
    <Accordion.Item id={styles.processDetails} eventKey={processDetails.id}>
      <Accordion.Header id={styles.header}>
        <MoreLineIcon
          style={{
            position: "absolute",
            top: "0",
            right: "17",
            color: "#7D7676",
            cursor: "pointer",
          }}
        />
        <br />
        <br />
        <Col md={8} style={{ fontWeight: "bold" }}>
          {processDetails.process_name}
        </Col>
        <Col md={3}>
          <span style={{ color: "#7D7676" }}>Linked Stations :</span>{" "}
          <span id={styles.processDetailsCount}>
            {processDetails.stations.length >= 10
              ? processDetails.stations.length
              : `0${processDetails.stations.length}`}
          </span>
        </Col>
      </Accordion.Header>
      <Accordion.Body
        style={{ textAlign: "left", background: "white", borderRadius: "10px" }}
      >
        <div>
          <span style={{ color: "#7D7676" }}>Description :</span>{" "}
          <span style={{ fontWeight: "bold" }}>
            {processDetails.process_description}
          </span>
        </div>
        <hr />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <span style={{ color: "#7D7676" }}>Apps Linked : </span>
            <span style={{ fontWeight: "bold" }}>00</span>
          </div>
          <div>
            <span style={{ color: "#7D7676" }}>Sheets Linked : </span>
            <span style={{ fontWeight: "bold" }}>00</span>
          </div>
        </div>
        <hr />

        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <span style={{ color: "#7D7676" }}> Linked Stations :</span>{" "}
          {processDetails.stations.length != 0 ? (
            <>
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
            </>
          ) : (
            <div>No Stations</div>
          )}
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}
