import styles from "../../../styles/triggers.module.css";
import { useState, useEffect } from "react";
import AddCircleLineIcon from "remixicon-react/AddCircleLineIcon";
import { Button, Form, Collapse, Row, Col } from "react-bootstrap";
import ArrowDownSLineIcon from "remixicon-react/ArrowDownSLineIcon";
import DeleteBin6LineIcon from "remixicon-react/DeleteBin6LineIcon";
import axios from "axios";
import TriggerConditions from "../../triggerConditions.js";
import { apiClientType } from "../../../../../clients/data/models/apiClientType.js";
import { ApiClient } from "../../../../../clients/apiClient.js";

export default function Triggers(props) {
  const [openCollapse, setOpenCollapse] = useState(false);
  const [conditionList, setConditionList] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await ApiClient(
        apiClientType.get,
        process.env.REACT_APP_SHEETS_BASE_URL,
        `/sheet/canvas`,
        {}
      );
      setConditionList(
        response.field_resources[props.value.fieldType.id].trigger_conditions
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
          <div key={`${index}-${item}`}>
            <Button
              type="button"
              id={styles.collapseButton}
              aria-controls="example-collapse-text"
              aria-expanded={openCollapse}
            >
              <span
                onClick={() => setOpenCollapse(!openCollapse)}
                style={{
                  marginLeft: "10px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Trigger {index + 1}
              </span>
              <ArrowDownSLineIcon
                onClick={() => setOpenCollapse(!openCollapse)}
                color="#7D7676"
                style={{ float: "right", marginTop: "3px", cursor: "pointer" }}
              />
              <DeleteBin6LineIcon
                onClick={() => props.value.onRemoveTrigger(item)}
                color="#ED0000"
                style={{
                  height: "20px",
                  width: "20px",
                  float: "right",
                  marginTop: "3px",
                  marginRight: "3px",
                  cursor: "pointer",
                }}
              />
            </Button>
            <Collapse in={openCollapse}>
              <div id={styles.triggerBody}>
                <b style={{ fontSize: "14px" }}>Condition</b>
                <Form>
                  <Form.Label>When the value entered</Form.Label>

                  <Form.Group className="mb-3">
                    <Form.Select
                      value={item.condition_type}
                      onChange={(e) => {
                        item.condition_type = e.target.value;
                        props.value.onEditTrigger(index, item);
                      }}
                    >
                      <option value="">Select Condition</option>
                      {conditionList.map((value, index) => {
                        return (
                          <option value={value} key={`${index}-${value}`}>
                            {
                              TriggerConditions(
                                value,
                                item,
                                props.value.fieldType.id,
                                props.value.fieldProperties,
                                (selectedValue) => {}
                              ).name
                            }
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Row>
                      {
                        TriggerConditions(
                          item?.condition_type,
                          item,
                          props.value.fieldType.id,
                          props.value.fieldProperties,
                          (selectedValue) => {
                            console.log(selectedValue);
                            if (selectedValue.lower_limit) {
                              item.condition["lower_limit"] =
                                selectedValue.lower_limit;
                            } else if (selectedValue.upper_limit) {
                              item.condition["upper_limit"] =
                                selectedValue.upper_limit;
                            } else {
                              item.condition = selectedValue;
                            }
                            props.value.onEditTrigger(index, item);
                          }
                        )?.fields
                      }
                    </Row>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <b style={{ fontSize: "14px" }}>Action</b>
                    </Form.Label>
                    <Form.Select
                      value={item.action_type}
                      onChange={(e) => {
                        item.action_type = e.target.value;
                        props.value.onEditTrigger(index, item);
                      }}
                    >
                      <option value="">Select Action</option>
                      <option value="SEND_MAIL">Send Mail</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Label>To</Form.Label>
                  <Form.Group className="mb-3">
                    <Form.Control
                      defaultValue={item.action.to[0]}
                      aria-label="Field Name"
                      onChange={(e) => {
                        let a = e.target.value;
                        item.action.to = [a];
                        props.value.onEditTrigger(index, item);
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      onChange={(e) => {
                        item.action.body = e.target.value;
                        props.value.onEditTrigger(index, item);
                      }}
                      defaultValue={item.action.body}
                      as="textarea"
                      rows={2}
                    />
                  </Form.Group>
                </Form>
              </div>
            </Collapse>
          </div>
        );
      })}
    </div>
  );
}
