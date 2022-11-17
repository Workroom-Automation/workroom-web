import { useState, useEffect } from "react";
import CustomButton from "../../../components/button";
import LeftArrowIcon from "remixicon-react/ArrowLeftSLineIcon";
import BillLineIcon from "remixicon-react/BillLineIcon";
import Tabs from "../../../components/tabs";
import PencilLineIcon from "remixicon-react/PencilRuler2LineIcon";
import LayoutTopIcon from "remixicon-react/LayoutTopLineIcon";
import FlashLightIcon from "remixicon-react/FlashlightLineIcon";
import Canvas from "../components/canvas.js";
import Field from "../components/field.js";
import { fields } from "../models/fields.js";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
export default function Sheets() {
  const tabList = ["Authoring", "Preview"];
  const [activeTab, setActiveTab] = useState(0);
  const [formObject, setFormObject] = useState([]);
  const fieldTypes = Object.keys(fields);

  return (
    <div style={{ padding: "22px 42px" }}>
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
      <DndProvider backend={HTML5Backend}>
        <div
          style={{
            border: "1px solid #DADADA",
            marginTop: "21px",
            borderRadius: "11px",
          }}
          className="d-flex bg-white"
        >
          <div style={{ borderRight: "1px solid #DADADA" }} className="col-3">
            <div
              style={{ borderBottom: "1px solid #DADADA", padding: "15px 0" }}
              className="d-flex justify-content-center"
            >
              <PencilLineIcon color="#7D7676" />
              <b style={{ marginLeft: "9px" }}> Fields</b>
            </div>
            <div style={{ maxHeight: "100vh", overflowY: "auto" }}>
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
                    <div>
                      {fields[fieldType].map((field, index) => {
                        return <Field key={index} value={{ field }} />;
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-9">
            <div
              style={{ borderBottom: "1px solid #DADADA", padding: "15px 0" }}
              className="d-flex justify-content-center"
            >
              <LayoutTopIcon color="#7D7676" />
              <b style={{ marginLeft: "9px" }}> Canvas</b>
            </div>
            <Canvas value={{ setFormObject, formObject }} />
          </div>
          {
            //  <div style={{ borderLeft: "1px solid #DADADA" }} className="col-2">
            //   <div
            //     style={{ borderBottom: "1px solid #DADADA", padding: "15px 0" }}
            //     className="d-flex justify-content-center"
            //   >
            //     <FlashLightIcon color="#7D7676" />
            //     <b style={{ marginLeft: "9px" }}> Controls</b>
            //   </div>
            // </div>
          }
        </div>
      </DndProvider>
    </div>
  );
}
