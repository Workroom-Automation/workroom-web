import React from "react";
export default function CustomButton({
  background = "#FFFFFF",
  icon: Icon = null,
  padding = "15px 12px",
  title = "",
  color = "#00000",
  fontSize = "14px",
  width = "100%",
  fontWeight = "700",
  onClick = () => {},
  border = "none",
  height = "auto",
  borderRadius = "11px",
  margin="0px",
  type=""
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="btn"
      style={{
        alignItems:"center",
        height: height,
        borderRadius: borderRadius,
        width: width,
        padding: padding,
        outline: "none",
        border: border,
        fontWeight: fontWeight,
        margin: margin,
        background:
          background === "gradient"
            ? "linear-gradient(90deg, #00C6FB 0%, #005BEA 100%)"
            : background,
      }}
    >
      {Icon && <Icon color={background === "#FFFFFF" ? "#7D7676" : "white"} />}
      {title && (
        <span style={{ color: color, marginLeft: Icon?"2.5px":0, fontSize: fontSize}}>
          {title}
        </span>
      )}
    </button>
  );
}
