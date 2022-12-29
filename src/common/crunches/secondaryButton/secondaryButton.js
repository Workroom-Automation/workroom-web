import styles from "./secondaryButton.module.css";

export default function SecondaryButton(props) {
  return (
    <button id={styles.button} type="button" onClick={props.value.onClick}>
      {props.value.child}
    </button>
  );
}
