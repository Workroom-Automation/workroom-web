import { useState, useEffect, useReducer } from "react";
import CustomButton from "../../../components/button";
import LeftArrowIcon from "remixicon-react/ArrowLeftSLineIcon";
import BillLineIcon from "remixicon-react/BillLineIcon";
import Tabs from "../../../components/tabs";
import PencilLineIcon from "remixicon-react/PencilRuler2LineIcon";
import LayoutTopIcon from "remixicon-react/LayoutTopLineIcon";
import FlashLightIcon from "remixicon-react/FlashlightLineIcon";
import Canvas from "../components/canvas/ui/canvas.js";
import Field from "../components/field.js";
import { fields } from "../data/models/fields.js";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import NewSheetDetailsModal from "../components/newSheetDetailsModal/ui/newSheetDetailsModal.js";
import { apiClientType } from "../../../clients/data/models/apiClientType.js";
import { ApiClient } from "../../../clients/apiClient.js";
import { SheetReducers } from "./state/sheetReducers.js";
import { sheetActionType } from "../data/models/sheetActionType.js";
import { useParams } from "react-router-dom";

export default function Sheets() {
  const params = useParams();
  console.log(params);
  const tabList = ["Authoring", "Preview"];
  const [activeTab, setActiveTab] = useState(0);
  const [sheet, dispatch] = useReducer(SheetReducers, {});
  const [sheetId, setSheetId] = useState();
  const fieldTypes = Object.keys(fields);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    (async () => {
      if (params.sheetId != "new") {
        let response = await ApiClient(
          apiClientType.get,
          process.env.REACT_APP_SHEETS_BASE_URL,
          `/sheet/${params.sheetId}`,
          {}
        );
        if (response) {
          console.log(response);
          setSheetId(response.id);
        }
      }
    })();
  }, []);
  const onFinishAuthoring = async () => {
    if (sheetId) {
      let params = sheet;
      params["id"] = sheetId;
      let response = await ApiClient(
        apiClientType.patch,
        process.env.REACT_APP_SHEETS_BASE_URL,
        `/sheet`,
        params
      );
      if (response) {
        console.log(response);
        setSheetId(response.id);
      }
    } else {
      let response = await ApiClient(
        apiClientType.post,
        process.env.REACT_APP_SHEETS_BASE_URL,
        `/sheet`,
        sheet
      );
      if (response) {
        console.log(response);
        setSheetId(response.id);
      }
    }
  };
  return (
    <div style={{ padding: "22px 42px" }}>
      <NewSheetDetailsModal
        show={showModal}
        value={{
          sheet,
          onSubmitModal: (params) => {
            dispatch({ type: sheetActionType.addSheetDetails, data: params });
            setShowModal(false);
          },
        }}
      />
      <div className="d-flex justify-content-between">
        <div>
          <CustomButton
            margin="0 20px 0 0"
            height="50px"
            padding="0 10px"
            icon={() => <LeftArrowIcon color="#7D7676" />}
          />
          <CustomButton
            onClick={() => setShowModal(true)}
            height="50px"
            padding="0 30px"
            background=" rgba(208, 235, 255, 0.35)"
            title={sheet.name}
            icon={() => (
              <BillLineIcon color="#000000" style={{ marginRight: "10px" }} />
            )}
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
            type="button"
            height="50px"
            padding="0 18px"
            color="#ffffff"
            background="gradient"
            title="Finish Authoring"
            onClick={onFinishAuthoring}
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
            <Canvas
              value={{
                onSectionDrop: (sections) => {
                  dispatch({
                    type: sheetActionType.addSectionsToSheet,
                    data: sections,
                  });
                },
              }}
            />
          </div>
        </div>
      </DndProvider>
    </div>
  );
}
