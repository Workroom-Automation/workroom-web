import React from "react";

export default function CustomTextInput({
  placeholder = "",
  value = "",
  onChange = () => {},
  style = {},
  className = "",
  type = "text",
  name = "",
  disabled = false,
  required = false,
  border = "1px solid #DADADA",
  borderRadius = "11px",
  padding = "5px",
  fontSize = "14px",
  fontWeight = "400",
  width = "100%",
  titleStyle = {},
  title = "",
}) {
  return (
    <div className={className} style={style}>
      {" "}
      {title && (
        <span style={{ marginBottom: "2px", ...titleStyle }}>{title}</span>
      )}
      <input
        style={{
          outline: "none",
          width: width,
          border: border,
          borderRadius: borderRadius,
          padding: padding,
        }}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
