import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import MoreLineIcon from "remixicon-react/MoreLineIcon";

export default function ToolTip(props) {
  return (
    <OverlayTrigger
      trigger="click"
      placement="bottom"
      overlay={
        <Popover id={`popover-positioned-bottom`}>
          <Popover.Body>
            <strong
              onClick={props.value.onDelete}
              style={{ color: "red", cursor: "pointer" }}
            >
              DELETE
            </strong>
          </Popover.Body>
        </Popover>
      }
    >
      <Button
        variant="secondary"
        style={{ border: "none", background: "none", float: "right" }}
      >
        <MoreLineIcon style={{ color: "grey", cursor: "pointer" }} />
      </Button>
    </OverlayTrigger>
  );
}
