import { useDrop } from "react-dnd";
import styles from "../styles/canvas.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { dragDropCanvas } from "../../../common/assets/images/dragDropCanvas.js";
import Section from "./section.js";
export default function Canvas(props) {
  const [collectedProps, drop] = useDrop(() => ({
    accept: "field",
    drop: (item, monitor) => {
      if (item.name == "Section") {
        // let a = {};
        // a[`section${props.value.formObject.length + 1}`] = [];
        props.value.formObject.push([]);
        props.value.setFormObject(props.value.formObject);
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
      data-testid="dustbin"
      style={{
        opacity: collectedProps.isOver && collectedProps.canDrop ? 0.5 : 1,
      }}
    >
      {props.value.formObject.length != 0 ? (
        <>
          {props.value.formObject.map((item, index) => {
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
                      onFileDrop: (field) => {
                        item.push(field);
                        props.value.formObject[index] = item;
                        props.value.setFormObject(props.value.formObject);
                      },
                      fields: item,
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
