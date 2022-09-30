import React from "react";

export default function CustomButton({
  background = "#FFFFFF",
  icon: Icon = null,
  padding = "15px 12px",
  title = "",
  color = "#00000",
  fontSize = "14px",
  width="100%",
  onClick=() => {},
}) {
  return (
    <button
    onClick={onClick}
      className="btn"
      style={{
        borderRadius: "11px",
        width: width,
        padding: padding,
        outline: "none",
        border: "none",
        fontWeight: 700,
        background:
          background === "gradient"
            ? "linear-gradient(90deg, #00C6FB 0%, #005BEA 100%)"
            : background,
      }}
    >
      {Icon && <Icon color={background === "#FFFFFF" ? "#7D7676" : "white"} />}
      <span style={{ color: color, marginLeft: "2.5px", fontSize: fontSize }}>
        {title}
      </span>
    </button>
  );
}
