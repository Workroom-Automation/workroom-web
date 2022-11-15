import { DndProvider, useDrag, useDrop } from "react-dnd";
import { dragDropCanvas } from "../../../common/assets/images/dragDropCanvas.js";
import styles from "../styles/canvas.module.css";
export default function Canvas() {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "box",
    drop: () => ({ name: "Dustbin" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div id={styles.canvas} ref={drop} data-testid="dustbin">
      <div id={styles.image}>{dragDropCanvas}</div>
    </div>
  );
}
