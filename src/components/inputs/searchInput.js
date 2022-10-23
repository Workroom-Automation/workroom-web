import React from "react";
import SearchIcon from "remixicon-react/SearchLineIcon";
import "./style.css";
export default function SearchInput({
  background = "#F7F8FA",
  color = "",
  onChange = () => {},
  value = "",
  width = "100%",
  height = "43px",
}) {
  return (
    <div
      style={{
        height: height,
        background: background,
        color: color,
        width: width,
        paddingLeft: "15px",
      }}
      className="search-input d-flex align-items-center "
    >
      <SearchIcon color="#7D7676" />
      <input style={{ marginLeft: "15px" }} placeholder="Search" />
    </div>
  );
}
