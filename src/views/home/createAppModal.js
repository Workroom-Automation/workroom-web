import React, { useState, useEffect } from "react";
import CustomButton from "../../components/button";
import CustomModal from "../../components/modals";
import BuildingIcon from "remixicon-react/Building3LineIcon";
import UserSelectionDropdown from "./userSelectionDropdown";
import { createWorkroomApp } from "./api";
import { appTypes } from "../../utils/constant";
const Header = () => {
  return (
    <div style={{ fontSize: "18px" }}>
      <b>New App Details</b>
    </div>
  );
};
const Body = ({ selectedWorkroomId, setShowCreateAppModal }) => {
  const fieldHeadingStyle = {
    fontSize: "14px",
    marginBottom: "12px",
    marginLeft: "11px",
  };
  const [users, setUsers] = useState([]);
  const [selectedAppType, setSelectedAppType] = useState();
  const [appName, setAppName] = useState("");
 
  const onSubmit = () => {
    if (users.length > 0 && selectedAppType && appName) {
      createWorkroomApp(
        {
          name: appName,
          type: selectedAppType,
          user: [...users],
          workroom_id: selectedWorkroomId,
        },
        () => {setShowCreateAppModal(false)}
      );
    } else {
      alert("Please fill all the fields");
    }
  };
  return (
    <div>
      <div style={fieldHeadingStyle}>App Type</div>
      <div className="row">
        {appTypes.map((appType, id) => {
          return (
            <div key={id} className="col-6">
              <CustomButton
                onClick={() => setSelectedAppType(appType.value)}
                fontWeight={selectedAppType === "Line App" ? "700" : "400"}
                padding="21px"
                border={
                  selectedAppType === appType.value
                    ? "1px solid #009AFF"
                    : "1px solid #DADADA"
                }
                title={appType.label}
                background={
                  selectedAppType === appType.value ? "#D0EBFF" : "#ffffff"
                }
                icon={() => (
                  <i style={{ marginRight: "7px" }}>
                    <BuildingIcon
                      color={
                        selectedAppType === appType.value
                          ? "#000000"
                          : "#7D7676"
                      }
                    />
                  </i>
                )}
              />
            </div>
          );
        })}
        <div style={{ ...fieldHeadingStyle, marginTop: "10px" }}>App Name</div>
        <div className="row">
          <input
            value={appName}
            onChange={(e) => setAppName(e.target.value)}
            className="input"
            style={{
              marginLeft: "11px",
              fontSize: "14px",
              padding: "18px 17px",
              height: "52px",
              border: "1px solid #DADADA",
              borderRadius: "5px",
              fontWeight: 700,
              fontSize: "14px",
              outline: "none",
            }}
          />
        </div>
        <div style={{ ...fieldHeadingStyle, marginTop: "10px" }}>Add Users</div>
        <div className="">
          <UserSelectionDropdown value={users} setValue={setUsers} />
        </div>
      </div>
      <Footer onSubmit={onSubmit} />
    </div>
  );
};
const Footer = ({ onSubmit }) => {
  return (
    <div style={{ margin: "30px 0" }} className="row justify-content-center">
      <div style={{ width: "180px" }}>
        <CustomButton
          title="Create New App"
          background="gradient"
          color="white"
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};
export default function CreateAppModal({
  showCreateAppModal,
  setShowCreateAppModal,
  selectedWorkroomId,
}) {
  return (
    <div>
      <CustomModal
        header={() => <Header />}
        body={() => <Body setShowCreateAppModal={setShowCreateAppModal} selectedWorkroomId={selectedWorkroomId} />}
        // footer={Footer}
        show={showCreateAppModal}
        setShow={setShowCreateAppModal}
      />
    </div>
  );
}
