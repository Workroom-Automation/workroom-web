import React, { useState, useEffect } from "react";
import Card from "../../components/cards/defaultCard";
import { logo, emptyProfile } from "../../assets/images/index";
import MenuIcon from "remixicon-react/More2LineIcon";
import CustomButton from "../../components/button";
import BillIcon from "remixicon-react/BillLineIcon";
import AddIcon from "remixicon-react/AddLineIcon";
import SettingIcon from "remixicon-react/Settings2LineIcon";
import CreateAppModal from "./createAppModal";
import SettingModal from "./settingModal";
import { getWorkroomApps } from "./api";
import { appTypes } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import { apiClientType } from "../../clients/data/models/apiClientType.js";
import { ApiClient } from "../../clients/apiClient.js";

const CardContent = ({
  workroom,
  setShowCreateAppModal,
  setShowSettingModal,
  setSelectedWorkroomId,
}) => {
  const [apps, setApps] = useState();
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
  useEffect(() => {
    getWorkroomApps({ workroom_id: workroom.id }, (data) => {
      console.log(data);
      setApps(data.applications);
    });
  }, []);
  let navigate = useNavigate();

  return (
    <div>
      <div className="d-flex justify-content-between ">
        <div>
          <img height="33px" src={logo} />
          <b style={{ fontSize: "14px" }}>{workroom?.name}</b>
        </div>
        <div style={{ height: "50px" }} className="d-flex">
          <Card
            onClick={() => {
              console.log("clicked");
              setShowCreateAppModal(true);
              setSelectedWorkroomId(workroom?.id);
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

      {appTypes.map((type, id) => {
        return (
          <div key={id} className="row m-0 ">
            <span
              style={{
                color: " #7D7676",
                fontSize: "14px",
                marginBottom: "22px",
                marginTop: "27px",
              }}
            >
              {type.label} (
              {apps?.filter((app) => app.type === type.value).length})
            </span>
            {apps?.slice(0, 6).map((app, index) => {
              if (app.type === type.value)
                return (
                  <div key={index} className="d-flex flex-column   mb-4 col-2">
                    <CustomButton
                      width="80px"
                      height="60px"
                      border=" 1px solid #DADADA"
                      onClick={() => navigate(`/appbuilder/${app.id}`)}
                      icon={() => <BillIcon color="#09121F" />}
                    />
                    <b style={{ fontSize: "14px" }}>{app.name}</b>
                  </div>
                );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default function WorkroomList({ data }) {
  const [showCreateAppModal, setShowCreateAppModal] = useState(false);
  const [showSettingModal, setShowSettingModal] = useState(false);
  const [selectedWorkroomId, setSelectedWorkroomId] = useState(null);
  console.log(data);
  return (
    <div className="row">
      {data && data.length > 0 ? (
        data.map((workroom, idx) => {
          return (
            <div className="col-6" key={idx}>
              <Card
                style={{
                  textAlign: "left",
                  padding: "20px 20px 20px 17px",
                }}
                content={(props) => (
                  <CardContent
                    setSelectedWorkroomId={setSelectedWorkroomId}
                    setShowCreateAppModal={setShowCreateAppModal}
                    workroom={workroom}
                    setShowSettingModal={setShowSettingModal}
                  />
                )}
              />
            </div>
          );
        })
      ) : (
        <center>No Workroom Created</center>
      )}
      <CreateAppModal
        selectedWorkroomId={selectedWorkroomId}
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
