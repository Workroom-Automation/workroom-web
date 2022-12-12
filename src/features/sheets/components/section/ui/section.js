import { useDrop } from "react-dnd";
import styles from "../../../styles/section.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect, useReducer } from "react";
import { SectionReducers } from "./state/sectionReducers.js";
import { sectionActionType } from "../data/models/sectionActionType.js";
import { fieldList } from "../../../data/models/fieldList.js";
import SideNav from "../../sideNav/ui/sideNav.js";

export default function Section(props) {
  const [show, setShow] = useState(false);
  const [selectedField, setSelectedField] = useState();

  const [fields, dispatch] = useReducer(SectionReducers, []);

  useEffect(() => {
    props.value.onFieldDrop(fields);
  }, [fields]);

  const [collectedProps, drop] = useDrop(() => ({
    accept: "field",
    drop: (item, monitor) => {
      if (item.name != "Section") {
        setSelectedField({ icon: item });
        dispatch({ type: sectionActionType.addField, data: item });
        setShow(true);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  return (
    <div
      ref={drop}
      data-testid="section"
      style={{
        opacity: collectedProps.isOver && collectedProps.canDrop ? 0.5 : 1,
      }}
    >
      {show ? (
        <SideNav
          value={{
            onToggle: (show) => {
              setShow(show);
            },
            show,
            selectedField,
            sectionNumber: props.value.sectionIndex + 1,
            onSave: (fieldInfo, index) => {
              dispatch({
                type: sectionActionType.addFieldInfoToField,
                data: {
                  index: index != undefined ? index : fields.length - 1,
                  fieldInfo: fieldInfo,
                },
              });
            },
          }}
        />
      ) : null}

      <Container>
        <Row style={{ marginTop: "20px" }}>
          {fields.length != 0 ? (
            <>
              {fields.map((item, index) => {
                let obj = fieldList.find((i) => i.id === item.properties.type);
                return (
                  <Col key={`${item.properties.type}-${index}`} md={4}>
                    <div
                      id={styles.field}
                      onClick={() => {
                        setShow(true);
                        setSelectedField({
                          icon: obj,
                          field: item,
                          index: index,
                        });
                      }}
                    >
                      <span
                        style={{
                          borderRight: "1px solid #a49f9f",
                          paddingRight: "10px",
                        }}
                      >
                        {obj.icon}
                      </span>
                      <span
                        style={{
                          marginLeft: "10px",
                          fontSize: "16px",
                        }}
                      >
                        {item.properties?.title}
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
  );
}
