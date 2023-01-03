import styles from "./primaryButton.module.css";

export default function PrimaryButton(props) {
  return (
    <button
      style={props.value.style}
      id={styles.button}
      type={props.value.type ? props.value.type : "button"}
      onClick={props.value.onClick}
    >
      {props.value.child}
    </button>
  );
}
