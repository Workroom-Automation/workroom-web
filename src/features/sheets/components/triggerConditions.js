import { Button, Form, Collapse, Row, Col } from "react-bootstrap";
import { fieldList } from "../data/models/fieldList.js";
import Multiselect from "multiselect-react-dropdown";
import styles from "../styles/triggers.module.css";
import dateFormat from "dateformat";

export default function TriggerConditions(
  type,
  item,
  fieldType,
  fieldProperties,
  onChange
) {
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
                value: parseFloat(e.target.value),
              };
              onChange(obj);
            }}
            type="number"
            step=".01"
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
                value: parseFloat(e.target.value),
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
                value: parseFloat(e.target.value),
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
                value: parseFloat(e.target.value),
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
                : dateFormat(item.condition?.date_time, "yyyy-mm-dd")
            }
            onChange={(e) => {
              let obj;
              if (fieldType == "NUMBER") {
                obj = {
                  value: parseFloat(e.target.value),
                };
              } else {
                obj = {
                  date_time: dateFormat(
                    e.target.value,
                    "yyyy-mm-dd'T'HH:MM:ss'Z'"
                  ),
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
                value: parseFloat(e.target.value),
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
            defaultValue={
              fieldType == "NUMBER"
                ? item.condition?.upper_limit
                : dateFormat(item.condition?.upper_limit, "yyyy-mm-dd")
            }
            onChange={(e) => {
              let obj = {
                upper_limit:
                  fieldType == "NUMBER"
                    ? parseFloat(e.target.value)
                    : dateFormat(e.target.value, "yyyy-mm-dd'T'HH:MM:ss'Z'"),
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
            defaultValue={
              fieldType == "NUMBER"
                ? item.condition?.lower_limit
                : dateFormat(item.condition?.lower_limit, "yyyy-mm-dd")
            }
            onChange={(e) => {
              let obj = {
                lower_limit:
                  fieldType == "NUMBER"
                    ? parseFloat(e.target.value)
                    : dateFormat(e.target.value, "yyyy-mm-dd'T'HH:MM:ss'Z'"),
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
                upper_limit: parseFloat(e.target.value),
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
                lower_limit: parseFloat(e.target.value),
              };
              onChange(obj);
            }}
            type="number"
            aria-label="Field Name"
          />
        </Col>,
      ],
    },
    SE: {
      name: "Selected",
      fields: [
        <Col>
          <Multiselect
            selectedValues={item.condition?.options?.map((item) => {
              return { name: item };
            })}
            options={fieldProperties.map((item, index) => {
              return { name: item, id: index };
            })}
            closeIcon="cancel"
            placeholder="Facilities"
            id={styles.multiSelect}
            showArrow={true}
            closeOnSelect={false}
            displayValue="name"
            onRemove={(list, item) => {
              let obj = {
                options: list.map((item) => {
                  return item.name;
                }),
              };
              onChange(obj);
            }}
            onSelect={(list, item) => {
              let obj = {
                options: list.map((item) => {
                  return item.name;
                }),
              };
              onChange(obj);
            }}
          />
        </Col>,
      ],
    },
    NSE: {
      name: "NotSelected",
      fields: [
        <Col>
          <Multiselect
            selectedValues={item.condition?.options?.map((item) => {
              return { name: item };
            })}
            options={fieldProperties.map((item, index) => {
              return { name: item, id: index };
            })}
            closeIcon="cancel"
            placeholder="Facilities"
            id={styles.multiSelect}
            showArrow={true}
            closeOnSelect={false}
            displayValue="name"
            onRemove={(list, item) => {
              let obj = {
                options: list.map((item) => {
                  return item.name;
                }),
              };
              onChange(obj);
            }}
            onSelect={(list, item) => {
              let obj = {
                options: list.map((item) => {
                  return item.name;
                }),
              };
              onChange(obj);
            }}
          />
        </Col>,
      ],
    },
    BF: {
      name: "Before",
      fields: [
        <Col>
          <Form.Label>Value</Form.Label>
          <Form.Control
            defaultValue={dateFormat(item.condition?.date_time, "yyyy-mm-dd")}
            onChange={(e) => {
              let obj = {
                date_time: dateFormat(
                  e.target.value,
                  "yyyy-mm-dd'T'HH:MM:ss'Z'"
                ),
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
            defaultValue={dateFormat(item.condition?.date_time, "yyyy-mm-dd")}
            onChange={(e) => {
              let obj = {
                date_time: dateFormat(
                  e.target.value,
                  "yyyy-mm-dd'T'HH:MM:ss'Z'"
                ),
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
