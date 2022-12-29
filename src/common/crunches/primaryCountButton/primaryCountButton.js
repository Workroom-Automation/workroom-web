import styles from "./primaryCountButton.module.css";

export default function PrimaryCountButton(props) {
  return (
    <button id={styles.button} type="button">
      <span id={styles.child}>{props.value.child}</span>
      <span id={styles.count}>{props.value.count}</span>
    </button>
  );
}
