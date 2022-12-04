import styles from "../../../styles/triggers.module.css";
import { useState, useEffect } from "react";
import AddCircleLineIcon from "remixicon-react/AddCircleLineIcon";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Collapse from "react-bootstrap/Collapse";
import ArrowDownSLineIcon from "remixicon-react/ArrowDownSLineIcon";
import axios from "axios";
import { triggerConditionType } from "../data/models/triggerConditionType.js";

export default function Triggers(props) {
  const [openCollapse1, setOpenCollapse1] = useState(false);
  const [conditionList, setConditionList] = useState([]);

  useEffect(() => {
    (async () => {
      let result = await axios("http://localhost:8003/api/v1/sheet/canvas");
      result = await result.data;
      setConditionList(
        result.field_resources[props.value.fieldType.id].trigger_conditions
      );
    })();
  }, []);
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
        onClick={() => props.value.onAddTrigger()}
      >
        <AddCircleLineIcon
          color="#009AFF"
          style={{ marginTop: "-5px", marginRight: "2px" }}
        />
        Add a Trigger
      </button>
      <br />
      {props.value.triggers?.map((item, index) => {
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
                      <option value="">Select Condition</option>
                      {conditionList.map((item, index) => {
                        let field = triggerConditionType[item];
                        return (
                          <option value={item} key={`${index}-${item}`}>
                            {field.name}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <b style={{ fontSize: "14px" }}>Action</b>
                    </Form.Label>
                    <Form.Select>
                      <option value="">Select Action</option>
                      <option value="SEND_MAIL">Send Mail</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Label>To</Form.Label>
                  <Form.Group className="mb-3">
                    <Form.Control aria-label="Field Name" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={2} />
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
