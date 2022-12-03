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

export default function Canvas(props) {
  const [sections, dispatch] = useReducer(CanvasReducers, []);

  useEffect(() => {
    props.value.setSheet(sections);
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
              <div key={`${index}-${item.name}`} id={styles.sector}>
                <div id={styles.header}>
                  <div id={styles.sectorNo}>Sector - {index + 1}</div>
                  <div id={styles.heading}>Basic Details</div>
                  <div id={styles.desc}>
                    Basic details of the propeller shaft{" "}
                  </div>
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
