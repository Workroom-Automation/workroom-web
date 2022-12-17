import styles from "./primaryButton.module.css";

export default function PrimaryButton(props) {
  return (
    <button id={styles.button} type="button" onClick={props.value.onClick}>
      {props.value.child}
    </button>
  );
}
