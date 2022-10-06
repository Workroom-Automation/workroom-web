import React, { useState } from "react";
import CustomButton from "../../components/button";
import CustomModal from "../../components/modals";
import CheckIcon from "remixicon-react/CheckLineIcon";
import DropDown from "../../components/dropdown";
import Building3LineIcon from "remixicon-react/Building3LineIcon";
import "./styles.css";
import UserSelectionDropdown from "./userSelectionDropdown";
const Body = () => {
  const [users, setUsers] = useState([
    { value: "Bruce Banner", label: "Bruce Banner" },
    { value: "Thor", label: "Thor" },
  ]);
  const tableData = [
    {
      appName: "CTQ System",
      date: "12/12/2020",
      createdBy: "Tony Stark",
    },
    {
      appName: "CAPA System",
      date: "12/12/2020",
      createdBy: "Rohan Agarwal",
    },
    {
      appName: "Post-Production QA",
      date: "12/12/2020",
      createdBy: "Abhinav Atthota",
    },
    {
      appName: "Post-Production QA",
      date: "12/12/2020",
      createdBy: "Abhinav Atthota",
    },
    {
      appName: "Post-Production QA",
      date: "12/12/2020",
      createdBy: "Abhinav Atthota",
    },
  ];
  return (
    <div style={{ paddingLeft: "12px" }}>
      <b style={{ paddingLeft: "5px" }}>Basic Details</b>
      <hr style={{ margin: "7px 0 30px 0" }} />
      <span style={{ margin: "0 0 7px 12px" }}>Workspace Name</span>
      <input
        style={{
          width: "100%",
          height: "52px",
          border: "1px solid #DADADA",
          borderRadius: "11px",
          paddingLeft: "12px",
          marginTop: "12px",
          fontWeight: "700",
          marginBottom: "34px",
        }}
      />
      <div style={{marginBottom:"55px"}}>
        <div style={{ margin: "0 0 7px 12px" }}> Admin (s)</div>
        <UserSelectionDropdown value={users} setValue={setUsers} />
      </div>
      <b style={{ paddingLeft: "5px" }}>Apps</b>
      <hr style={{ margin: "7px 0 30px 0" }} />
      <div style={{ margin: "0 0 7px 0px" }}> Line Apps (02)</div>
      <table className="app-table">
        <tr>
          <th></th>
          <th>App Name</th>
          <th>Creation Date</th>
          <th>Created By</th>
        </tr>
        {tableData.map((data, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td style={{ textAlign: "left", paddingLeft: "25px" }}>
                <Building3LineIcon color="#7D7676" />
                &nbsp;&nbsp;{data.appName}
              </td>
              <td>{data.date}</td>
              <td>{data.createdBy}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
const Header = () => {
  return (
    <div
      style={{ width: "100%", padding: "17px 0 0 8px" }}
      className="d-flex justify-content-between alien-center"
    >
      <b style={{ fontSize: "28px" }}> Workroom Settings </b>
      <CustomButton
        background=" linear-gradient(90deg, #00C6FB 0%, #005BEA 100%)"
        border="1px solid #DADADA"
        title="Save Changes"
        color="#FFFFFF"
        width="155px"
        padding="15px "
        icon={() => <CheckIcon color="#FFFFFF" />}
      />
    </div>
  );
};
const Footer = () => {
  return <div>Footer</div>;
};
export default function SettingModal({
  showSettingModal,
  setShowSettingModal,
}) {
  return (
    <div>
      <CustomModal
        body={() => <Body />}
        header={() => <Header />}
        show={showSettingModal}
        setShow={setShowSettingModal}
        style={{ overflow: "hidden" }}
        className="setting-modal"
      />
    </div>
  );
}
