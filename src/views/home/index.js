import React, { useState } from "react";
import Card from "../../components/cards/defaultCard";
import NotificationBadgeIcon from "remixicon-react/NotificationBadgeLineIcon";
import ServerIcon from "remixicon-react/ServerLineIcon";
import AddIcon from "remixicon-react/AddCircleLineIcon";
import CustomButton from "../../components/button";
import { useNavigate } from "react-router-dom";
import WorkSpaceList from "./workSpaceList";
import AddWorkspaceModal from "./addWorkspaceModal";
import SettingModal from "./settingModal";
const RequestContent = () => {
  let requestCount = 2;
  return (
    <div style={{ fontWeight: 700, color: "#009AFF", fontSize: "28px" }}>
      {requestCount}
    </div>
  );
};
export default function Home() {
  const workspaceData = [
    {
      name: "Quality Workroom",
      appCount: 12,
      peopleCount: 11,
      adminName: "Chaitanya Kumar",
      appList: {
        lineApps: [
          { appName: "CTQ System" },
          { appName: "CAPA System" },
          { appName: "CTQ System" },
          { appName: "CAPA System" },
          { appName: "CTQ System" },
          { appName: "CAPA System" },
          { appName: "CTQ System" },
          { appName: "CAPA System" },
          { appName: "CTQ System" },
          { appName: "CAPA System" },
          { appName: "CTQ System" },
          { appName: "CAPA System" },
          { appName: "CTQ System" },
          { appName: "CAPA System" },
        ],
        userApps: [{ appName: "Supplier PDIs" }],
      },
    },
     {
      name: "Quality Workroom",
      appCount: 12,
      peopleCount: 11,
      adminName: "Chaitanya Kumar",
      appList: {
        lineApps: [
          { appName: "CTQ System" },
          { appName: "CAPA System" },
          { appName: "CTQ System" },
          { appName: "CAPA System" },
          { appName: "CTQ System" },
          { appName: "CAPA System" },
          { appName: "CTQ System" },
          { appName: "CAPA System" },
          { appName: "CTQ System" },
          { appName: "CAPA System" },
          { appName: "CTQ System" },
          { appName: "CAPA System" },
          { appName: "CTQ System" },
          { appName: "CAPA System" },
        ],
        userApps: [{ appName: "Supplier PDIs" }],
      },
    },
  ];
  let navigate = useNavigate();
  let userName = "Abhinav";
  const [showWorkspaceModal, setShowWorkspaceModal] = useState(false);
  return (
    <div style={{ padding: "35px 33px 0" }}>
      <div className="d-flex justify-content-between">
        <b style={{ fontSize: "24px" }}>Hi, {userName}</b>
        <div>
          <CustomButton
            title="Master Data"
            color="#000000"
            icon={ServerIcon}
            padding="17px 12px"
            width="145px"
            onClick={() => navigate("/masterData")}
          />
          {/* <CustomButton
            title="Create New Workroom"
            background="gradient"
            icon={AddIcon}
            color="#ffffff"
          /> */}
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <Card
          style={{ width: "139px", paddingBottom: "18px" }}
          title="Requests"
          titleIcon={NotificationBadgeIcon}
          content={RequestContent}
        />
        <div style={{ marginTop: "16px", paddingBottom: "20px" }}>
          <CustomButton
            padding="15px 10px"
            width="205px"
            title="Create New Workroom"
            background="gradient"
            icon={AddIcon}
            color="#ffffff"
            onClick={() => {
              setShowWorkspaceModal(true);
            }}
          />
        </div>
      </div>
      <div>
        <WorkSpaceList data={workspaceData} />
      </div>
      <AddWorkspaceModal
        showWorkspaceModal={showWorkspaceModal}
        setShowWorkspaceModal={setShowWorkspaceModal}
      />
    </div>
  );
}
