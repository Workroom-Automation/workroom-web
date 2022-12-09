import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "../../../styles/sideNav.module.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import React, { useState, useReducer } from "react";
import ListSettingsLineIcon from "remixicon-react/ListSettingsLineIcon";
import ArrowDownSLineIcon from "remixicon-react/ArrowDownSLineIcon";
import Settings6LineIcon from "remixicon-react/Settings6LineIcon";
import FlashlightLineIcon from "remixicon-react/FlashlightLineIcon";
import FieldProperties from "../../fieldProperties/ui/fieldProperties.js";
import Triggers from "../../triggers/ui/triggers.js";
import { sideNavActionType } from "../data/models/sideNavActionType.js";
import { fieldDetailsAcceptedType } from "../data/models/fieldDetailsAcceptedType";
import { SideNavReducers } from "./state/sideNavReducers.js";
import { FieldPropertiesReducers } from "../../fieldProperties/ui/state/fieldPropertiesReducers.js";
import { TriggersReducers } from "../../triggers/ui/state/triggersReducers.js";
import { fieldPropertiesActionType } from "../../fieldProperties/data/models/fieldPropertiesActionType.js";
import { triggersActionType } from "../../triggers/data/models/triggersActionType.js";

export default function SideNav(props) {
  let field = props.value.selectedField?.field;
  const [fieldName, setFieldName] = useState(field?.properties?.name);
  const [fieldDescription, setFieldDescription] = useState(
    field?.properties?.description
  );
  const [fieldProperties, dispatchFieldProperties] = useReducer(
    FieldPropertiesReducers,
    field?.properties?.field_form_data?.options
      ? field?.properties?.field_form_data?.options
      : []
  );
  const [triggers, dispatchTriggers] = useReducer(
    TriggersReducers,
    field?.triggers ? field?.triggers : []
  );

  const [properties, dispatchProperties] = useReducer(SideNavReducers, {});
  const [openCollapse1, setOpenCollapse1] = useState(false);
  const [openCollapse2, setOpenCollapse2] = useState(false);
  const [openCollapse3, setOpenCollapse3] = useState(false);

  const saveChanges = () => {
    let fieldInfo = {
      properties: {
        type: props.value.selectedField?.icon.id,
        name: fieldName,
        description: fieldDescription,
        field_form_data: {
          options: fieldProperties,
        },
      },
      triggers: triggers,
    };
    props.value.onSave(fieldInfo, props.value.selectedField.index);
    props.value.onToggle(false);
  };
  return (
    <Offcanvas
      id={styles.sideNav}
      show={props.value.show}
      onHide={saveChanges}
      placement="end"
      // scroll={true}
      // backdrop={false}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <div id={styles.sectorNo}>Sector - {props.value.sectionNumber}</div>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              {props.value.selectedField?.icon.icon}
            </InputGroup.Text>
            <Form.Control
              value={fieldName}
              onChange={(e) => setFieldName(e.target.value)}
              placeholder="Field Name"
              aria-label="Field Name"
            />
          </InputGroup>
          <Form.Group className="mb-3">
            <Form.Label>Field Description</Form.Label>
            <Form.Control
              value={fieldDescription}
              onChange={(e) => setFieldDescription(e.target.value)}
              as="textarea"
              rows={3}
            />
          </Form.Group>
          {
            // <Form.Label>References</Form.Label>
            // <InputGroup className="mb-3">
            // <Form.Control />
            //  <Button variant="outline-secondary" id="button-addon2">
            //   Attach Reference
            // </Button>
            // </InputGroup>
          }
          {fieldDetailsAcceptedType.triggers.includes(
            props.value.selectedField?.icon.id
          ) ? (
            <Form.Label>Field Details</Form.Label>
          ) : null}
          {fieldDetailsAcceptedType.fieldProperties.includes(
            props.value.selectedField?.icon.id
          ) ? (
            <Form.Group className="mb-3">
              <Button
                id={styles.collapseButton}
                onClick={() => setOpenCollapse1(!openCollapse1)}
                aria-controls="example-collapse-text"
                aria-expanded={openCollapse1}
              >
                <ListSettingsLineIcon color="#7D7676" />
                <span style={{ marginLeft: "10px" }}>Field Properties</span>
                <ArrowDownSLineIcon
                  color="#7D7676"
                  style={{ float: "right", marginTop: "3px" }}
                />
              </Button>
              <Collapse in={openCollapse1}>
                <div id="example-collapse-text">
                  <FieldProperties
                    value={{
                      fieldProperties,
                      onAddProperty: () => {
                        dispatchFieldProperties({
                          type: fieldPropertiesActionType.addFieldProperties,
                        });
                      },
                      onEditProperty: (index, property) => {
                        dispatchFieldProperties({
                          type: fieldPropertiesActionType.editFieldProperties,
                          data: { index: index, property: property },
                        });
                      },
                      onRemoveProperty: (index) => {
                        dispatchFieldProperties({
                          type: fieldPropertiesActionType.removeFieldProperties,
                          data: index,
                        });
                      },
                    }}
                  />
                </div>
              </Collapse>
            </Form.Group>
          ) : null}
          {
            //  <Form.Group className="mb-3">
            //   <Button
            //     id={styles.collapseButton}
            //     onClick={() => setOpenCollapse2(!openCollapse2)}
            //     aria-controls="example-collapse-text"
            //     aria-expanded={openCollapse2}
            //   >
            //     <Settings6LineIcon color="#7D7676" />
            //     <span style={{ marginLeft: "10px" }}>Validations</span>
            //     <ArrowDownSLineIcon
            //       color="#7D7676"
            //       style={{ float: "right", marginTop: "3px" }}
            //     />
            //   </Button>
            //   <Collapse in={openCollapse2}>
            //     <div id="example-collapse-text">
            //       Anim pariatur cliche reprehenderit, enim eiusmod high life
            //       accusamus terry richardson ad squid. Nihil anim keffiyeh
            //       helvetica, craft beer labore wes anderson cred nesciunt sapiente
            //       ea proident.
            //     </div>
            //   </Collapse>
            // </Form.Group>
          }
          {fieldDetailsAcceptedType.triggers.includes(
            props.value.selectedField?.icon.id
          ) ? (
            <Form.Group className="mb-3">
              <Button
                id={styles.collapseButton}
                onClick={() => setOpenCollapse3(!openCollapse3)}
                aria-controls="example-collapse-text"
                aria-expanded={openCollapse3}
              >
                <FlashlightLineIcon color="#7D7676" />
                <span style={{ marginLeft: "10px" }}>Triggers</span>
                <ArrowDownSLineIcon
                  color="#7D7676"
                  style={{ float: "right", marginTop: "3px" }}
                />
              </Button>
              <Collapse in={openCollapse3}>
                <div id="example-collapse-text">
                  <Triggers
                    value={{
                      triggers,
                      fieldType: props.value.selectedField?.icon,
                      onAddTrigger: () => {
                        dispatchTriggers({
                          type: triggersActionType.addTriggers,
                        });
                      },
                      onRemoveTrigger: (index) => {
                        dispatchTriggers({
                          type: triggersActionType.removeTriggers,
                          data: index,
                        });
                      },
                      onEditTrigger: (index, trigger) => {
                        dispatchTriggers({
                          type: triggersActionType.editTriggers,
                          data: { index: index, trigger: trigger },
                        });
                      },
                    }}
                  />
                </div>
              </Collapse>
            </Form.Group>
          ) : null}
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
