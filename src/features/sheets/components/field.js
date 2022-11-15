import { useDrag } from "react-dnd";

export default function Field(props) {
  let field = props.value.field;
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "box",
    item: field,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  return (
    <div
      style={{
        padding: "11px 16px",
        borderBottom: "1px solid #DADADA",
        cursor: "pointer",
      }}
      ref={drag}
      data-testid={`box`}
      className="d-flex"
    >
      {field.icon}
      <span style={{ marginLeft: "9px" }}>{field.name}</span>
    </div>
  );
}
