import styles from "../../../styles/productTable.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import More2LineIcon from "remixicon-react/More2LineIcon";
import MoreLineIcon from "remixicon-react/MoreLineIcon";
import PrimaryButton from "../../../../../common/crunches/primaryButton/primaryButton.js";
import AddLineIcon from "remixicon-react/AddLineIcon";
import ArrowDownSLineIcon from "remixicon-react/ArrowDownSLineIcon";

export default function ProductTable() {
  return (
    <div id={styles.table}>
      <p style={{ margin: "10px" }}>Product Details</p>
      <hr style={{ margin: "0px" }} />
      <Row>
        <Col
          md={4}
          style={{
            borderRight: "1px solid #dadada",
            paddingBottom: "10px",
            paddingRight: "0px",
          }}
        >
          <div id={styles.product} class={styles.selected}>
            Propeller Shaft
            <p id={styles.productId}>Product Id: 100001 </p>
          </div>
          <div id={styles.product}>
            Propeller Shaft
            <p id={styles.productId}>Product Id: 100001 </p>
          </div>
          <div id={styles.product}>
            Propeller Shaft
            <p id={styles.productId}>Product Id: 100001 </p>
          </div>
        </Col>
        <Col
          style={{
            margin: "13px 10px 10px 0px",
          }}
        >
          <div id={styles.productDetails}>
            <Row>
              <Col md={3} style={{ borderRight: "1px solid #dadada" }}>
                Propeller Shaft
                <p id={styles.productId}>Product Id: 100001 </p>
              </Col>
              <Col md={5}>
                Processes
                <p id={styles.productDetailsCount}>04 </p>
              </Col>
              <Col>
                Apps Linked <p id={styles.productDetailsCount}>05 </p>
              </Col>
              <Col>
                <More2LineIcon
                  style={{
                    float: "right",
                    color: "#7D7676",
                    marginTop: "10px",
                    cursor: "pointer",
                  }}
                />
              </Col>
            </Row>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "19px",
            }}
          >
            <div style={{ color: "#7D7676", fontSize: "12px" }}>Processed:</div>
            <PrimaryButton
              value={{
                child: (
                  <>
                    <AddLineIcon
                      size="17px"
                      style={{
                        marginRight: "5px",
                        marginBottom: "3px",
                      }}
                    />
                    Create a Process
                  </>
                ),
                onClick: () => {},
                style: {
                  padding: "7px",
                  fontSize: "12px",
                },
              }}
            />
          </div>
          <div id={styles.processDetails}>
            <Row>
              <Col>
                <MoreLineIcon
                  style={{
                    float: "right",
                    color: "#7D7676",
                    cursor: "pointer",
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col md={8} style={{ fontWeight: "bold" }}>
                Incoming Quality Assurance
              </Col>
              <Col md={3}>
                Linked Stations:
                <span id={styles.processDetailsCount}> 04 </span>
              </Col>
              <Col>
                <ArrowDownSLineIcon
                  style={{
                    float: "right",
                    color: "#7D7676",
                    cursor: "pointer",
                  }}
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
