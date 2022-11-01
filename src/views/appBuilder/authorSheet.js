import React, { useState } from "react";
import CustomButton from "../../components/button";
import LeftArrowIcon from "remixicon-react/ArrowLeftSLineIcon";
import BillLineIcon from "remixicon-react/BillLineIcon";
import Tabs from "../../components/tabs";
import PencilLineIcon from "remixicon-react/PencilRuler2LineIcon";
import LayoutTopIcon from "remixicon-react/LayoutTopLineIcon";
import FlashLightIcon from "remixicon-react/FlashlightLineIcon";
import TextIcon from "remixicon-react/TextSpacingIcon";
import HashTagIcon from "remixicon-react/HashtagIcon";
import ChecklistIcon from "remixicon-react/CheckboxCircleLineIcon";
import SingleCheckIcon from "remixicon-react/CheckLineIcon";
import DoubleCheckIcon from "remixicon-react/CheckDoubleLineIcon";
import CalenderIcon from "remixicon-react/CalendarLineIcon";
import UserIcon from "remixicon-react/User3LineIcon";
import UserGroupIcon from "remixicon-react/GroupLineIcon";
import ImageAddIcon from "remixicon-react/ImageAddLineIcon";
import FileAddIcon from "remixicon-react/FileAddLineIcon";
import AddLinkIcon from "remixicon-react/LinkMIcon";
import SectionIcon from "remixicon-react/LayoutRowLineIcon";

export default function AuthorSheet() {
  const tabList = ["Authoring", "Preview"];
  const [activeTab, setActiveTab] = useState(0);
  const fields = {
    ["Basic Fields"]: [
      {
        name: "Text",
        icon: <TextIcon color="#7D7676" />,
      },
      { name: "Number", icon: <HashTagIcon color="#7D7676" /> },
    ],
    ["Selection Fields"]: [
      {
        name: "Checklist",
        icon: <ChecklistIcon color="#7D7676" />,
      },
      {
        name: "Single Selection",
        icon: <SingleCheckIcon color="#7D7676" />,
      },
      {
        name: "Multi-Selection",
        icon: <DoubleCheckIcon color="#7D7676" />,
      },
      {
        name: "Select Date & Time",
        icon: <CalenderIcon color="#7D7676" />,
      },
      {
        name: "User Selection",
        icon: <UserIcon color="#7D7676" />,
      },
      {
        name: "Multi-User Selection",
        icon: <UserGroupIcon color="#7D7676" />,
      },
    ],
    ["Attachment Fields"]: [
      { name: "Upload Photo/Video", icon: <ImageAddIcon color="#7D7676" /> },
      {
        name: "Upload File",
        icon: <FileAddIcon color="#7D7676" />,
      },
      {
        name: "Add Link",
        icon: <AddLinkIcon color="#7D7676" />,
      },
    ],
    ["Layout"]: [{ name: "Section", icon: <SectionIcon color="#7D7676" /> }],
  };
  const fieldTypes = Object.keys(fields);
  return (
    <div style={{ padding: "22px 42px" }}>
      <div style={{ position: "sticky", top: "115px" }}>
        <div className="d-flex justify-content-between">
          <div>
            <CustomButton
              margin="0 20px 0 0"
              height="50px"
              padding="0 10px"
              icon={() => <LeftArrowIcon color="#7D7676" />}
            />
            <CustomButton
              height="50px"
              padding="0 30px"
              background=" rgba(208, 235, 255, 0.35)"
              title="T 1: Pre-Delivery Inspection"
              icon={() => <BillLineIcon color="#000000" />}
            />
          </div>
          <div className="d-flex">
            <Tabs
              tabs={tabList}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              activeTabBg=" #D0EBFF"
              color="#000000"
              fontWeight={400}
              border="1px solid #DADADA"
              tabPadding="13px 15px"
              style={{ marginRight: "20px" }}
            />
            <CustomButton
              height="50px"
              padding="0 18px"
              color="#ffffff"
              background="gradient"
              title="Finish Authoring"
            />
          </div>
        </div>
      </div>
      <div
        style={{
          border: "1px solid #DADADA",
          marginTop: "21px",
          borderRadius: "11px",
          minHeight: "100vh",
        }}
        className="d-flex bg-white"
      >
        <div style={{ borderRight: "1px solid #DADADA" }} className="col-2">
          <div
            style={{ borderBottom: "1px solid #DADADA", padding: "15px 0" }}
            className="d-flex justify-content-center"
          >
            <PencilLineIcon color="#7D7676" />
            <b style={{ marginLeft: "9px" }}> Fields</b>
          </div>
          <div style={{ maxHeight: "70%", overflowY: "scroll" }}>
            {fieldTypes.map((fieldType, index) => {
              return (
                <div key={index}>
                  <div
                    style={{
                      padding: "11px 16px",
                      background: "rgba(229, 229, 229, 0.49)",
                      borderBottom: "1px solid #DADADA",
                    }}
                    className="d-flex"
                  >
                    {fieldType}
                  </div>
                  <div className="">
                    {fields[fieldType].map((field, index) => {
                      return (
                        <div
                          key={index}
                          style={{
                            padding: "11px 16px",
                            borderBottom: "1px solid #DADADA",
                          }}
                          className="d-flex"
                        >
                          {field.icon}
                          <span style={{ marginLeft: "9px" }}>
                            {field.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-8">
          <div
            style={{ borderBottom: "1px solid #DADADA", padding: "15px 0" }}
            className="d-flex justify-content-center"
          >
            <LayoutTopIcon color="#7D7676" />
            <b style={{ marginLeft: "9px" }}> Canvas</b>
          </div>
          <div></div>
        </div>
        <div style={{ borderLeft: "1px solid #DADADA" }} className="col-2">
          <div
            style={{ borderBottom: "1px solid #DADADA", padding: "15px 0" }}
            className="d-flex justify-content-center"
          >
            <FlashLightIcon color="#7D7676" />
            <b style={{ marginLeft: "9px" }}> Controls</b>
          </div>
        </div>
      </div>
    </div>
  );
}
