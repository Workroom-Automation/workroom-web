import React, { useState } from "react";
import Card from "../../components/cards/defaultCard";
import { logo, emptyProfile } from "../../assets/images/index";
import MenuIcon from "remixicon-react/More2LineIcon";
import CustomButton from "../../components/button";
import BillIcon from "remixicon-react/BillLineIcon";
import AddIcon from "remixicon-react/AddLineIcon";
import SettingIcon from "remixicon-react/Settings2LineIcon";
import CreateAppModal from "./createAppModal";
import SettingModal from "./settingModal";
const CardContent = ({
  workspace,
  setShowCreateAppModal,
  setShowSettingModal,
}) => {
  const countCardStyle = {
    height: "32px",
    padding: "17px 8px",
    borderRadius: "11px",
    margin: "0 20px 0 0",
    color: "#009AFF",
    fontWeight: 700,
    fontSize: "16px",
    border: "1px solid #009AFF",
    cursor: "pointer",
  };
  return (
    <div>
      <div className="d-flex justify-content-between ">
        <div>
          <img height="33px" src={logo} />
          <b style={{ fontSize: "14px" }}>{workspace?.name}</b>
        </div>
        <div style={{ height: "50px" }} className="d-flex">
          {/* <CustomButton
            width="190px"
            color=" #009AFF"
            title="Create New App"
            icon={() => <AddIcon color=" #009AFF" />}
            border="1px solid  #009AFF"
          />
          <CustomButton
          width="70px"
            border="1px solid #DADADA"
            icon={() => <SettingIcon />}
          /> */}
          <Card
            onClick={() => {
              console.log("clicked");
              setShowCreateAppModal(true);
            }}
            content={() => (
              <div>
                <AddIcon color=" #009AFF" />
                Create New App
              </div>
            )}
            style={countCardStyle}
          />
          <Card
            onClick={() => {
              setShowSettingModal(true);
            }}
            content={() => <SettingIcon size="18" color="#7D7676" />}
            style={{ height: "36px", padding: "3px 8px", cursor: "pointer" }}
          />
        </div>
      </div>
      <hr style={{ margin: "0 -17px" }} />

      <div className="row m-0 ">
        <span
          style={{
            color: " #7D7676",
            fontSize: "14px",
            marginBottom: "22px",
            marginTop: "27px",
          }}
        >
          Line Apps ({workspace?.appList?.lineApps?.length})
        </span>
        {workspace?.appList?.lineApps?.slice(0, 6).map((app, index) => {
          return (
            <div key={index} className="d-flex flex-column   mb-4 col-2">
              <CustomButton
                width="80px"
                height="60px"
                border=" 1px solid #DADADA"
                icon={() => <BillIcon color="#09121F" />}
              />
              <b style={{ fontSize: "14px" }}>{app.appName}</b>
            </div>
          );
        })}
      </div>
      <div className="row m-0">
        <span
          style={{ color: " #7D7676", fontSize: "14px", marginBottom: "22px" }}
        >
          User Apps ({workspace?.appList?.userApps?.length})
        </span>
        {workspace?.appList?.userApps?.slice(0, 5).map((app, index) => {
          return (
            <div key={index} className="d-flex flex-column mb-4 col-2">
              <CustomButton
                width="80px"
                height="60px"
                border=" 1px solid #DADADA"
                icon={() => <BillIcon color="#09121F" />}
              />
              <b style={{ fontSize: "14px" }}>{app.appName}</b>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default function WorkSpaceList({ data }) {
  const [showCreateAppModal, setShowCreateAppModal] = useState(false);
  const [showSettingModal, setShowSettingModal] = useState(false);
  return (
    <div className="row">
      {data &&
        data.length > 0 &&
        data.map((workspace, idx) => {
          return (
            <div className="col-6" key={idx}>
              <Card
                style={{
                  textAlign: "left",
                  padding: "20px 20px 20px 17px",
                }}
                content={(props) => (
                  <CardContent
                    setShowCreateAppModal={setShowCreateAppModal}
                    workspace={workspace}
                    setShowSettingModal={setShowSettingModal}
                  />
                )}
              />
            </div>
          );
        })}
      <CreateAppModal
        setShowCreateAppModal={setShowCreateAppModal}
        showCreateAppModal={showCreateAppModal}
      />
      <SettingModal
        showSettingModal={showSettingModal}
        setShowSettingModal={setShowSettingModal}
      />
    </div>
  );
}
