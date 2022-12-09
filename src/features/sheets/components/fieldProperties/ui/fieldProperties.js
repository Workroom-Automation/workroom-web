import styles from "../../../styles/fieldProperties.module.css";
import { useState, useReducer } from "react";
import AddCircleLineIcon from "remixicon-react/AddCircleLineIcon";
import IndeterminateCircleLineIcon from "remixicon-react/IndeterminateCircleLineIcon";
import { Button, Form, Collapse, InputGroup } from "react-bootstrap";
import ArrowDownSLineIcon from "remixicon-react/ArrowDownSLineIcon";
import SingleCheckIcon from "remixicon-react/CheckLineIcon";

export default function FieldProperties(props) {
  return (
    <div id={styles.fieldProperties}>
      <p
        style={{
          color: "#7D76760",
          lineHeight: "1",
          marginTop: "10px",
        }}
      >
        Field Options
      </p>

      <Form>
        {props.value.fieldProperties?.map((item, index) => {
          return (
            <InputGroup key={`${index}-${item}`} className="mb-3">
              <InputGroup.Text>{index + 1}.</InputGroup.Text>
              <Form.Control
                defaultValue={item}
                onChange={(e) => {
                  props.value.onEditProperty(index, e.target.value);
                }}
                placeholder="Enter Property"
                aria-label="Field Name"
              />
              <InputGroup.Text>
                <IndeterminateCircleLineIcon
                  onClick={() => props.value.onRemoveProperty(item)}
                  color="#7D7676"
                  style={{ cursor: "pointer" }}
                />
              </InputGroup.Text>
            </InputGroup>
          );
        })}
      </Form>
      <button
        type="button"
        style={{
          color: "#7D76760",
          border: "none",
          background: "none",
          marginTop: "10px",
        }}
        onClick={() => props.value.onAddProperty()}
      >
        <AddCircleLineIcon
          color="#7D7676"
          style={{ marginTop: "-5px", marginRight: "2px" }}
        />
        Add an Options
      </button>
    </div>
  );
}
