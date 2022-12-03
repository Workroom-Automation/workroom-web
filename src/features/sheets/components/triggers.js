import styles from "../styles/triggers.module.css";
import { useState } from "react";
import AddCircleLineIcon from "remixicon-react/AddCircleLineIcon";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Collapse from "react-bootstrap/Collapse";
import ArrowDownSLineIcon from "remixicon-react/ArrowDownSLineIcon";

export default function Triggers(props) {
  const [openCollapse1, setOpenCollapse1] = useState(false);
  const [addTrigger, setAddTrigger] = useState([
    {
      condition: "",
      value: {},
      action: "",
      sendTo: [],
      message: "",
    },
  ]);

  const onAddTrigger = () => {
    setAddTrigger([
      ...addTrigger,
      {
        condition: "",
        value: {},
        action: "",
        sendTo: [],
        message: "",
      },
    ]);
  };
  return (
    <div id={styles.triggers}>
      <button
        type="button"
        style={{
          border: "none",
          background: "none",
          float: "right",
          marginTop: "10px",
        }}
        onClick={() => onAddTrigger()}
      >
        <AddCircleLineIcon
          color="#009AFF"
          style={{ marginTop: "-5px", marginRight: "2px" }}
        />
        Add a Trigger
      </button>
      <br />
      {addTrigger.map((item, index) => {
        return (
          <>
            <Button
              id={styles.collapseButton}
              onClick={() => setOpenCollapse1(!openCollapse1)}
              aria-controls="example-collapse-text"
              aria-expanded={openCollapse1}
            >
              <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
                Trigger {index + 1}
              </span>
              <ArrowDownSLineIcon
                color="#7D7676"
                style={{ float: "right", marginTop: "3px" }}
              />
            </Button>
            <Collapse in={openCollapse1}>
              <div id={styles.triggerBody}>
                <b style={{ fontSize: "14px" }}>Condition</b>
                <Form>
                  <Form.Label>When the value entered</Form.Label>

                  <Form.Group className="mb-3">
                    <Form.Select>
                      <option value="">Tons</option>
                      <option value="">Kgs</option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </div>
            </Collapse>
          </>
        );
      })}
    </div>
  );
}
