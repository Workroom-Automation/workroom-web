import React from "react";
import CustomButton from "../button";
import "./style.css";

export default function Card(props) {
  const {
    title = "",
    titleIcon: TitleIcon = null,
    content: Content = () => {
      return <div></div>;
    },
    style = {},
    className = "",
  } = props;
  return (
    <div style={style} className={className + `card default-card`}>
      <div className="card-head">
        {TitleIcon && <TitleIcon color="#7D7676" size="16" />}
        {title && <span>{title}</span>}
      </div>
       <Content />
    </div>
  );
}
