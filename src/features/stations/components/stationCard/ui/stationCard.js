import styles from "../../../styles/stationCard.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import More2LineIcon from "remixicon-react/More2LineIcon";
import MoreLineIcon from "remixicon-react/MoreLineIcon";
import PrimaryButton from "../../../../../common/crunches/primaryButton/primaryButton.js";
import AddLineIcon from "remixicon-react/AddLineIcon";
import ArrowDownSLineIcon from "remixicon-react/ArrowDownSLineIcon";

export default function StationCard(props) {
  let station = props.value.station;
  return (
    <div id={styles.card}>
      <Row>
        <Col md={4}>
          <div style={{ border: "1px solid #dadada", height: "100%" }}>Img</div>
        </Col>
        <Col>
          <p style={{ fontWeight: "bold", color: "black" }}>{station.name}</p>
          <p style={{}}> {station?.description}</p>
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Station Code: {station?.station_code}</div>
            <div>Linked Process: 00</div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
