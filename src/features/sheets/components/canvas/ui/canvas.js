import { useDrop } from "react-dnd";
import styles from "../../../styles/canvas.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { dragDropCanvas } from "../../../../../common/assets/images/dragDropCanvas.js";
import Section from "../../section/ui/section.js";
import { useState, useEffect, useReducer } from "react";
import { CanvasReducers } from "./state/canvasReducers.js";
import { canvasActionType } from "../data/models/canvasActionType.js";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function Canvas(props) {
  const [sections, dispatch] = useReducer(CanvasReducers, []);
  const [selectedNameIndex, setSelectedNameIndex] = useState(-1);
  const [selectedDescriptionIndex, setSelectedDescriptionIndex] = useState(-1);

  useEffect(() => {
    props.value.onSectionDrop(sections);
  }, [sections]);

  const [collectedProps, drop] = useDrop(() => ({
    accept: "field",
    drop: (item, monitor) => {
      if (item.name == "Section") {
        dispatch({ type: canvasActionType.addSection });
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  return (
    <div
      id={styles.canvas}
      ref={drop}
      data-testid="canvas"
      style={{
        opacity: collectedProps.isOver && collectedProps.canDrop ? 0.5 : 1,
      }}
    >
      {sections.length != 0 ? (
        <>
          {sections.map((item, index) => {
            return (
              <div key={`${index}-${item}`} id={styles.sector}>
                <div id={styles.header}>
                  <div id={styles.sectorNo}>Sector - {index + 1}</div>
                  {selectedNameIndex == index ? (
                    <InputGroup
                      className="mb-3"
                      style={{
                        maxWidth: "400px",
                        margin: "15px 0 0 0",
                      }}
                    >
                      <Form.Control
                        defaultValue={item.name}
                        onChange={(e) =>
                          dispatch({
                            type: canvasActionType.editSectionName,
                            data: {
                              index: index,
                              name: e.target.value,
                            },
                          })
                        }
                        placeholder="Section Name"
                        required
                      />
                      <InputGroup.Text onClick={() => setSelectedNameIndex(-1)}>
                        Save
                      </InputGroup.Text>
                    </InputGroup>
                  ) : (
                    <div
                      id={styles.heading}
                      onClick={() => setSelectedNameIndex(index)}
                    >
                      {item.name ? item.name : <> Section Name</>}
                    </div>
                  )}
                  {selectedDescriptionIndex == index ? (
                    <InputGroup
                      className="mb-3"
                      style={{
                        maxWidth: "400px",
                        margin: "15px 0 0 0",
                      }}
                    >
                      <Form.Control
                        defaultValue={item.description}
                        onChange={(e) =>
                          dispatch({
                            type: canvasActionType.editSectionDescription,
                            data: {
                              index: index,
                              description: e.target.value,
                            },
                          })
                        }
                        placeholder="Section Description"
                        required
                      />
                      <InputGroup.Text
                        onClick={() => setSelectedDescriptionIndex(-1)}
                      >
                        Save
                      </InputGroup.Text>
                    </InputGroup>
                  ) : (
                    <div
                      id={styles.desc}
                      onClick={() => setSelectedDescriptionIndex(index)}
                    >
                      {item.description ? (
                        item.description
                      ) : (
                        <>Section Description</>
                      )}
                    </div>
                  )}
                </div>
                <div id={styles.body}>
                  <Section
                    value={{
                      onFieldDrop: (fields) => {
                        dispatch({
                          type: canvasActionType.addFieldsToSection,
                          data: {
                            index: index,
                            fields: fields,
                          },
                        });
                      },
                      sectionIndex: index,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <div id={styles.image}>{dragDropCanvas}</div>
      )}
    </div>
  );
}
