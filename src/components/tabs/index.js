import React from "react";
import CustomButton from "../button";

export default function Tabs({
  tabs = [],
  activeTab = 0,
  setActiveTab = () => {},
  style = {},
  className = "",
  tabWidth = "100px",
}) {
  return (
    <div style={style} className="d-flex">
      {tabs.map((tab, index) => {
        return (
          <CustomButton
            onClick={() => setActiveTab(index)}
            background={activeTab === index ? "gradient" : "#FFFFFF"}
            color={activeTab === index ? "#FFFFFF" : "#000000"}
            fontWeight={activeTab === index ? "700" : "400"}
            padding="13px 0"
            width={tabWidth}
            borderRadius={
              index == 0
                ? "11px 0 0 11px"
                : index == tabs.length - 1
                ? "0 11px 11px 0"
                : "0"
            }
            title={tab}
          />
        );
      })}
    </div>
  );
}
