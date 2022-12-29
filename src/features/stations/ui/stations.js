import { useState, useEffect } from "react";
import SecondaryButton from "../../../common/crunches/secondaryButton/secondaryButton.js";
import PrimaryButton from "../../../common/crunches/primaryButton/primaryButton.js";
import PrimaryCountButton from "../../../common/crunches/primaryCountButton/primaryCountButton.js";
import Container from "react-bootstrap/Container";
import StationCard from "../components/stationCard/ui/stationCard.js";
import Building3LineIcon from "remixicon-react/Building3LineIcon";
import AddLineIcon from "remixicon-react/AddLineIcon";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Products({ type }) {
  return (
    <Container fluid={true} style={{ padding: "40px" }}>
      <SecondaryButton
        value={{
          child: (
            <>
              <Building3LineIcon
                style={{
                  marginRight: "10px",
                  marginBottom: "3px",
                  color: "#7D7676",
                }}
              />
              Stations
            </>
          ),
          onClick: () => {},
        }}
      />
      <div
        style={{
          marginTop: "30px",
          marginBottom: "22px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <PrimaryCountButton
          value={{
            child: <>Total Stations</>,
            count: "12",
          }}
        />
        <PrimaryButton
          value={{
            child: (
              <>
                <AddLineIcon
                  style={{
                    marginRight: "10px",
                    marginBottom: "3px",
                  }}
                />
                New Station
              </>
            ),
            onClick: () => {},
          }}
        />
      </div>
      <Row>
        <Col md={6} style={{ marginTop: "15px" }}>
          <StationCard />
        </Col>
        <Col md={6} style={{ marginTop: "15px" }}>
          <StationCard />
        </Col>
        <Col md={6} style={{ marginTop: "15px" }}>
          <StationCard />
        </Col>
        <Col md={6} style={{ marginTop: "15px" }}>
          <StationCard />
        </Col>
      </Row>
    </Container>
  );
}
