import styles from "../../../styles/productTable.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import More2LineIcon from "remixicon-react/More2LineIcon";
import MoreLineIcon from "remixicon-react/MoreLineIcon";
import PrimaryButton from "../../../../../common/crunches/primaryButton/primaryButton.js";
import AddLineIcon from "remixicon-react/AddLineIcon";
import ArrowDownSLineIcon from "remixicon-react/ArrowDownSLineIcon";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import ProcessAccordion from "../../processAccordion/ui/processAccordion.js";
import Accordion from "react-bootstrap/Accordion";

export default function ProductTable(props) {
  let productDetails = props.value.productDetails;
  let processes = productDetails?.processes?.sort((item1, item2) => {
    return item1.position - item2.position;
  });
  if (props.value.productList.loading) {
    return "...loading";
  }
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
          {props.value.productList?.data?.map((item, index) => {
            return (
              <div
                onClick={() => props.value.onSelectProduct(item.id)}
                key={item.id}
                id={styles.product}
                className={productDetails?.id == item.id ? styles.selected : ""}
              >
                {item.name}
                <p id={styles.productId}>
                  Product Id: {item.code ? item.code : "-"}
                </p>
              </div>
            );
          })}
        </Col>
        <Col
          style={{
            margin: "13px 10px 10px 0px",
          }}
        >
          <div id={styles.productDetails}>
            <Row>
              <Col md={3} style={{ borderRight: "1px solid #dadada" }}>
                {productDetails?.name}
                <p id={styles.productId}>
                  {productDetails?.code
                    ? `Product Id: ${productDetails.code}`
                    : ""}
                </p>
              </Col>
              <Col md={5}>
                Processes
                <p id={styles.productDetailsCount}>
                  {productDetails?.processes?.length >= 10
                    ? productDetails.processes.length
                    : `0${productDetails?.processes?.length}`}
                </p>
              </Col>
              <Col>
                Apps Linked <p id={styles.productDetailsCount}>00 </p>
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
                onClick: () => {
                  props.value.setShowModal(true);
                  props.value.getStationList();
                },
                style: {
                  padding: "7px",
                  fontSize: "12px",
                },
              }}
            />
          </div>
          <br />

          <Accordion>
            {processes?.map((item, index) => {
              return (
                <Row key={item.id} style={{ marginTop: "30px" }}>
                  <Col xs={1} style={{ marginTop: "30px" }}>
                    <div
                      style={{
                        borderRadius: "50%",
                        width: "30px",
                        height: "30px",
                        color: "white",
                        background: "#009AFF",
                        fontWeight: "bold",
                      }}
                    >
                      <div style={{ paddingTop: "2.5px" }}>{index + 1}</div>
                    </div>
                  </Col>
                  <Col>
                    <ProcessAccordion value={{ processDetails: item }} />
                  </Col>
                </Row>
              );
            })}
          </Accordion>
        </Col>
      </Row>
    </div>
  );
}
