import React, { useState, useEffect } from "react";
import CustomButton from "../../components/button";
import CustomModal from "../../components/modals";
import BuildingIcon from "remixicon-react/Building3LineIcon";
import UserSelectionDropdown from "./userSelectionDropdown";
const Header = () => {
  return (
    <div style={{ fontSize: "18px" }}>
      <b>New App Details</b>
    </div>
  );
};
const Body = () => {

  const fieldHeadingStyle = {
    fontSize: "14px",
    marginBottom: "12px",
    marginLeft: "11px",
  };
  const [users, setUsers] = useState([]);
  const [selectedAppType, setSelectedAppType] = useState();
  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div>
      <div style={fieldHeadingStyle}>App Type</div>
      <div className="row">
        <div className="col-6">
          <CustomButton
            onClick={() => setSelectedAppType("Line App")}
            fontWeight={selectedAppType === "Line App" ? "700" : "400"}
            padding="21px"
            border={
              selectedAppType === "Line App"
                ? "1px solid #009AFF"
                : "1px solid #DADADA"
            }
            title="Line App"
            background={selectedAppType === "Line App" ? "#D0EBFF" : "#ffffff"}
            icon={() => (
              <i style={{ marginRight: "7px" }}>
                <BuildingIcon
                  color={selectedAppType === "Line App" ? "#000000" : "#7D7676"}
                />
              </i>
            )}
          />
        </div>
        <div className="col-6">
          <CustomButton
            onClick={() => setSelectedAppType("User App")}
            fontWeight={selectedAppType === "User App" ? "700" : "400"}
            padding="21px"
            border={
              selectedAppType === "User App"
                ? "1px solid #009AFF"
                : "1px solid #DADADA"
            }
            title="User App"
            background={selectedAppType === "User App" ? "#D0EBFF" : "#ffffff"}
            icon={() => (
              <i style={{ marginRight: "7px" }}>
                <BuildingIcon
                  color={selectedAppType === "User App" ? "#000000" : "#7D7676"}
                />
              </i>
            )}
          />
        </div>
        <div style={{ ...fieldHeadingStyle, marginTop: "10px" }}>App Name</div>
        <div className="row">
          {" "}
          <input
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
          <UserSelectionDropdown
            value={users}
            setValue={setUsers}
          />
        </div>
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <div style={{ margin: "30px 0" }} className="row justify-content-center">
      <div style={{ width: "180px" }}>
        <CustomButton
          title="Create New App"
          background="gradient"
          color="white"
        />
      </div>
    </div>
  );
};
export default function CreateAppModal({
  showCreateAppModal,
  setShowCreateAppModal,
}) {
  return (
    <div>
      <CustomModal
        header={() => <Header />}
        body={Body}
        footer={Footer}
        show={showCreateAppModal}
        setShow={setShowCreateAppModal}
      />
    </div>
  );
}
