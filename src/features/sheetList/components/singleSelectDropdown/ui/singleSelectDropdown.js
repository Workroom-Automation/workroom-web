import Dropdown from "react-bootstrap/Dropdown";
import styles from "../../../styles/singleSelectDropdown.module.css";

export default function SingleSelectDropdown(props) {
  let state = props.value.state;
  return (
    <Dropdown id={styles.dropdown}>
      <Dropdown.Toggle id="dropdown-autoclose-true" id={styles.button}>
        {props.value.buttonText}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {state.loading ? (
          <Dropdown.Item>...loading</Dropdown.Item>
        ) : (
          <>
            <Dropdown.Item onClick={() => props.value.selectValue({})}>
              Select...
            </Dropdown.Item>
            {state?.data?.map((item, index) => {
              return (
                <Dropdown.Item
                  key={item.id}
                  onClick={() =>
                    props.value.selectValue({ id: item.id, name: item.name })
                  }
                >
                  {item.name}
                </Dropdown.Item>
              );
            })}
          </>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}
