import styles from "./primaryButton.module.css";

export default function PrimaryButton(props) {
  return (
    <button
      style={props.value.style}
      id={styles.button}
      type="button"
      onClick={props.value.onClick}
      styles={props.value.styles}
    >
      {props.value.child}
    </button>
  );
}
