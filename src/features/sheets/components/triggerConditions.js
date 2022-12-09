import { Button, Form, Collapse, Row, Col } from "react-bootstrap";
import { fieldList } from "../data/models/fieldList.js";

export default function TriggerConditions(type, item, fieldType, onChange) {
  let fields = {
    LT: {
      name: "Less Than",
      fields: [
        <Col>
          <Form.Label>Value</Form.Label>
          <Form.Control
            defaultValue={item.condition?.value}
            onChange={(e) => {
              let obj = {
                value: e.target.value,
              };
              onChange(obj);
            }}
            type="number"
            aria-label="Field Name"
          />
        </Col>,
      ],
    },
    GT: {
      name: "Greater Than",
      fields: [
        <Col>
          <Form.Label>Value</Form.Label>
          <Form.Control
            defaultValue={item.condition?.value}
            onChange={(e) => {
              let obj = {
                value: e.target.value,
              };
              onChange(obj);
            }}
            type="number"
            aria-label="Field Name"
          />
        </Col>,
      ],
    },
    LTE: {
      name: "Less Than And Equal To",
      fields: [
        <Col>
          <Form.Label>Value</Form.Label>
          <Form.Control
            defaultValue={item.condition?.value}
            onChange={(e) => {
              let obj = {
                value: e.target.value,
              };
              onChange(obj);
            }}
            type="number"
            aria-label="Field Name"
          />
        </Col>,
      ],
    },
    GTE: {
      name: "Greater Than And Equal To",
      fields: [
        <Col>
          <Form.Label>Value</Form.Label>
          <Form.Control
            defaultValue={item.condition?.value}
            onChange={(e) => {
              let obj = {
                value: e.target.value,
              };
              onChange(obj);
            }}
            type="number"
            aria-label="Field Name"
          />
        </Col>,
      ],
    },
    EQ: {
      name: "Equal To",
      fields: [
        <Col>
          <Form.Label>Value</Form.Label>
          <Form.Control
            defaultValue={
              fieldType == "NUMBER"
                ? item.condition?.value
                : item.condition?.date_time
            }
            onChange={(e) => {
              let obj;
              if (fieldType == "NUMBER") {
                obj = {
                  value: e.target.value,
                };
              } else {
                obj = {
                  date_time: e.target.value,
                };
              }
              onChange(obj);
            }}
            type={fieldType == "NUMBER" ? "number" : "date"}
            aria-label="Field Name"
          />
        </Col>,
      ],
    },
    NEQ: {
      name: "Not Equal To",
      fields: [
        <Col>
          <Form.Label>Value</Form.Label>
          <Form.Control
            defaultValue={item.condition?.value}
            onChange={(e) => {
              let obj = {
                value: e.target.value,
              };
              onChange(obj);
            }}
            type="number"
            aria-label="Field Name"
          />
        </Col>,
      ],
    },
    BW: {
      name: "Between",
      fields: [
        <Col>
          <Form.Label>Upper Limit</Form.Label>
          <Form.Control
            defaultValue={item.condition?.upper_limit}
            onChange={(e) => {
              let obj = {
                upper_limit: e.target.value,
              };
              onChange(obj);
            }}
            type={fieldType == "NUMBER" ? "number" : "date"}
            aria-label="Field Name"
          />
        </Col>,
        <Col>
          <Form.Label>Lower Limit</Form.Label>
          <Form.Control
            defaultValue={item.condition?.lower_limit}
            onChange={(e) => {
              let obj = {
                lower_limit: e.target.value,
              };
              onChange(obj);
            }}
            type={fieldType == "NUMBER" ? "number" : "date"}
            aria-label="Field Name"
          />
        </Col>,
      ],
    },
    NBW: {
      name: "Not In Between",
      fields: [
        <Col>
          <Form.Label>Upper Limit</Form.Label>
          <Form.Control
            defaultValue={item.condition?.upper_limit}
            onChange={(e) => {
              let obj = {
                upper_limit: e.target.value,
              };
              onChange(obj);
            }}
            type="number"
            aria-label="Field Name"
          />
        </Col>,
        <Col>
          <Form.Label>Lower Limit</Form.Label>
          <Form.Control
            defaultValue={item.condition?.lower_limit}
            onChange={(e) => {
              let obj = {
                lower_limit: e.target.value,
              };
              onChange(obj);
            }}
            type="number"
            aria-label="Field Name"
          />
        </Col>,
      ],
    },
    SE: { name: "Selected" },
    NSE: { name: "NotSelected" },
    BF: {
      name: "Before",
      fields: [
        <Col>
          <Form.Label>Value</Form.Label>
          <Form.Control
            defaultValue={item.condition?.date_time}
            onChange={(e) => {
              let obj = {
                value: e.target.value,
              };
              onChange(obj);
            }}
            type="date"
            name="date"
          />
        </Col>,
      ],
    },
    AF: {
      name: "After",
      fields: [
        <Col>
          <Form.Label>Value</Form.Label>
          <Form.Control
            defaultValue={item.condition?.date_time}
            onChange={(e) => {
              let obj = {
                date_time: e.target.value,
              };
              onChange(obj);
            }}
            type="date"
            name="date"
          />
        </Col>,
      ],
    },
  };
  return fields[type];
}
