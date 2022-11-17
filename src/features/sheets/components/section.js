import { useDrop } from "react-dnd";
import styles from "../styles/section.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

export default function Section(props) {
  const [show, setShow] = useState(false);
  const [collectedProps, drop] = useDrop(() => ({
    accept: "field",
    drop: (item, monitor) => {
      if (item.name != "Section") {
        props.value.onFileDrop(item);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  return (
    <div>
      <div
        ref={drop}
        data-testid="section"
        style={{
          opacity: collectedProps.isOver && collectedProps.canDrop ? 0.5 : 1,
        }}
      >
        <Container>
          <Row style={{ marginTop: "20px" }}>
            {props.value.fields.length != 0 ? (
              <>
                {props.value.fields.map((item, index) => {
                  return (
                    <Col key={`${item.name}-${index}`} md={4}>
                      <div id={styles.field} onClick={() => setShow(true)}>
                        <span
                          style={{
                            borderRight: "1px solid #a49f9f",
                            paddingRight: "10px",
                          }}
                        >
                          {item.icon}
                        </span>
                      </div>
                    </Col>
                  );
                })}
              </>
            ) : (
              <div style={{ padding: "20px" }}>Drop Your Fields Here</div>
            )}
          </Row>
        </Container>
      </div>
    </div>
  );
}
