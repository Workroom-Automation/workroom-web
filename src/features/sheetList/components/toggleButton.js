import styles from "../styles/toggleButton.module.css";
import { useState } from "react";
export default function ToggleButton(props) {
  const [activeOption1, setActiveOption1] = useState(true);
  return (
    <div id={styles.toggleButton}>
      <span
        onClick={() => setActiveOption1(true)}
        id={styles.option1}
        className={activeOption1 ? styles.selected : ""}
      >
        Sheets
      </span>
      <span
        id={styles.option2}
        onClick={() => setActiveOption1(false)}
        className={!activeOption1 ? styles.selected : ""}
      >
        Workflow
      </span>
    </div>
  );
}
