import React from "react";
import CustomButton from "../button";

export default function Tabs({
  tabs = [],
  activeTab = 0,
  setActiveTab = () => {},
  style = {},
  className = "",
  tabWidth = "100px",
  activeTabBg = "gradient",
  color,
  fontWeight,
  border = "1px solid #DADADA",
  tabPadding = "13px 0",
}) {
  return (
    <div style={style} className="d-flex">
      {tabs.map((tab, index) => {
        return (
          <CustomButton
            key={index}
            onClick={() => setActiveTab(index)}
            background={activeTab === index ? activeTabBg : "#FFFFFF"}
            color={color ? color : activeTab === index ? "#FFFFFF" : "#000000"}
            fontWeight={
              fontWeight ? fontWeight : activeTab === index ? "700" : "400"
            }
            padding={tabPadding}
            width={tabWidth}
            borderRadius={
              index == 0
                ? "11px 0 0 11px"
                : index == tabs.length - 1
                ? "0 11px 11px 0"
                : "0"
            }
            title={tab}
            border={border}
          />
        );
      })}
    </div>
  );
}
