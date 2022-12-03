import React, { useState } from "react";
import CustomButton from "../../components/button";
import CustomDropdown from "../../components/dropdown";
import SearchInput from "../../components/inputs/searchInput";
import Tabs from "../../components/tabs";
import AddCircleLineIcon from "remixicon-react/AddCircleLineIcon";
import PeopleTable from "../people/peopleTable";
import CustomTable from "../../components/tables";
import CustomModal from "../../components/modals";
import DragdropIcon from "remixicon-react/DragDropLineIcon";
import { AppSquareIcon } from "../../assets/icons";
import CustomTextInput from "../../components/inputs/textInput";
import BillIcon from "remixicon-react/BillLineIcon";
import { useNavigate } from "react-router-dom";
export default function AppBuilder() {
  const tabs = ["Sheets", "Workflow"];
  const [activeTab, setActiveTab] = React.useState(0);
  const sampleOptions = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];
  const dropdownStyles = {
    container: (provided, state) => {
      {
        return {
          ...provided,
          paddingRight: 0,
          minWidth: "200px",
        };
      }
    },
    multiValue: (provided, state) => {
      return {
        ...provided,
        backgroundColor: "transparent",
        padding: "0 8px",
        fontSize: "14px",
      };
    },

    control: (provided, state) => {
      return {
        ...provided,
        minHeight: "52px",
        outline: "none",
        border: "1px solid #DADADA",
        borderRadius: "11px 0 0 11px",
      };
    },
    menuList: (provided, state) => {
      return {
        ...provided,
        borderRadius: "11px",
      };
    },
    option: (provided, state) => {
      return {
        ...provided,
        backgroundColor: state.isFocused ? "#D0EBFF" : "white",
        color: "#000000",
        borderBottom: "1px solid #DADADA",
      };
    },
  };
  const dropdownStyles1 = {
    ...dropdownStyles,
    control: (provided, state) => {
      return {
        ...provided,
        minHeight: "52px",
        outline: "none",
        border: "1px solid #DADADA",
        borderRadius: "0 11px 11px 0",
      };
    },
  };
  const [authorSheetModal, setAuthorSheetModal] = useState(false);
  const [sheetDetailModal, setSheetDetailModal] = useState(false);
  let navigate = new useNavigate();
  return (
    <div>
      <div className="d-flex justify-content-center">
        <SearchInput height="52.4px" width="25%" background="#ffffff" />
      </div>
      <div
        className="d-flex justify-content-between"
        style={{ marginTop: "40px" }}
      >
        <div className="d-flex">
          <Tabs
            tabWidth="130px"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={tabs}
            style={{ marginRight: "30px" }}
          />
          <CustomDropdown
            value={sampleOptions[0]}
            styles={dropdownStyles}
            options={sampleOptions}
          />
          <CustomDropdown
            value={sampleOptions[0]}
            styles={dropdownStyles1}
            options={sampleOptions}
          />
        </div>
        <CustomButton
          onClick={() => {
            navigate("/appbuilder/authorsheet/sheets");
          }}
          icon={() => <AddCircleLineIcon color="#ffffff" />}
          color="#ffffff"
          width="172px"
          background="gradient"
          title="Author New Sheet"
          margin="0 42px 0 0 "
        />
      </div>
      <div style={{ margin: "15px 42px 0 0" }}>
        <CustomTable
          internalBorder={true}
          headerStyle={{
            borderLeft: "1px solid #DADADA",
            fontWeight: "700",
            color: "#000000",
          }}
          columns={[
            { title: "Sheet ID", dataIndex: "sheetId" },
            { title: "Sheet Name", dataIndex: "sheetName" },
            { title: "Linked Asset", dataIndex: "linkedAsset" },
            { title: "Sub-Asset", dataIndex: "subAsset" },
            { title: "Steps", dataIndex: "steps" },
            { title: "Version", dataIndex: "version" },
          ]}
          data={[
            {
              sheetId: "1",
              sheetName: "The First",
              linkedAsset: "Propeller Shaft",
              subAsset: "Post-Production QA  ",
              steps: "3",
              version: "1.0",
            },
            {
              sheetId: "2",
              sheetName: "The Second",
              linkedAsset: "Propeller Shaft",
              subAsset: "Post-Production QA  ",
              steps: "31",
              version: "99.0",
            },
          ]}
        />
        <CustomModal
          show={authorSheetModal}
          setShow={setAuthorSheetModal}
          // size="md"
          body={() => {
            return (
              <center style={{ padding: "0 100px" }}>
                <div style={{ fontSize: "16px", margin: "33px 0 48px 0" }}>
                  How do you want to start?
                </div>
                <div className="row justify-content-between">
                  <div className="col-6">
                    <CustomButton
                      onClick={() => {
                        setAuthorSheetModal(false);
                        setSheetDetailModal(true);
                      }}
                      background="gradient"
                      width="100px"
                      height="90px"
                      icon={() => <DragdropIcon size="45px" color="#ffffff" />}
                    />
                    <div style={{ fontSize: "16px", marginTop: "24px" }}>
                      <b>Author from Scratch</b>

                      <p style={{ marginTop: "8px" }}>
                        Build a sheet by dragging & dropping using the authoring
                        module, from scratch
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <CustomButton
                      background="gradient"
                      width="100px"
                      height="90px"
                      icon={() => <AppSquareIcon size="44px" />}
                    />
                    <div style={{ fontSize: "16px", marginTop: "24px" }}>
                      <b>Choose from Templates</b>

                      <p style={{ marginTop: "8px" }}>
                        Choose an already built sheet from our extensive sheets
                        library and edit on top of it
                      </p>
                    </div>
                  </div>
                </div>
              </center>
            );
          }}
        />
        <CustomModal
          show={sheetDetailModal}
          setShow={setSheetDetailModal}
          body={() => {
            return (
              <div>
                <div
                  style={{
                    background: "#D0EBFF",
                    borderRadius: "11px 11px 0 0",
                    padding: "19px 0",
                  }}
                  className="d-flex justify-content-center"
                >
                  <BillIcon color=" #09121F" />
                  &nbsp; New Sheet Details
                </div>
                <div style={{ padding: "25px" }}>
                  <CustomTextInput title="Sheet Name" />
                  <CustomTextInput
                    style={{ margin: "10px 0" }}
                    title="Sheet Name"
                  />
                  <div className="row">
                    <CustomTextInput className="col-6" title="Asset" />
                    <CustomTextInput className="col-6" title="Sub-Asset" />
                  </div>
                </div>
                <div
                  style={{ margin: "28px 0 25px 0" }}
                  className="d-flex justify-content-center"
                >
                  <div className="col-3">
                    <CustomButton
                      onClick={() => {
                        navigate("/appbuilder/authorsheet/2");
                      }}
                      padding="10px 15px"
                      color="#ffffff"
                      background="gradient"
                      title="Start Authoring"
                    />
                  </div>
                </div>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}
