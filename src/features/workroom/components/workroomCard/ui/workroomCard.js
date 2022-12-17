import styles from "../../../styles/workroomCard.module.css";
import { useState, useEffect } from "react";
import { apiClientType } from "../../../../../clients/data/models/apiClientType.js";
import { ApiClient } from "../../../../../clients/apiClient.js";
import { mainLogo } from "../../../../../common/assets/images/mainLogo.js";
import AddIcon from "remixicon-react/AddLineIcon";
import SettingIcon from "remixicon-react/Settings2LineIcon";
import { applicationType } from "../data/models/applicationType.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BillIcon from "remixicon-react/BillLineIcon";
import { useNavigate } from "react-router-dom";
import CreateAppModal from "../../../../../views/home/createAppModal";
import SettingModal from "../../../../../views/home/settingModal";
export default function WorkroomCard(props) {
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);
  const [showCreateAppModal, setShowCreateAppModal] = useState(false);
  const [showSettingModal, setShowSettingModal] = useState(false);
  const [selectedWorkroomId, setSelectedWorkroomId] = useState(null);

  useEffect(() => {
    getApplications();
  }, []);
  const getApplications = async () => {
    let response = await ApiClient(
      apiClientType.get,
      process.env.REACT_APP_MASTER_BASE_URL,
      `/application/`,
      { workroom_id: props.value.workroom.id },
      { "x-user-id": "Harry Potter" }
    );
    if (response) {
      console.log(response);
      setApplications(response.applications);
    }
  };
  return (
    <div id={styles.workroomCard}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          flexWrap: "wrap",
          marginBottom: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>{mainLogo}</div>
          <b style={{ fontSize: "17px", color: "grey" }}>
            {props.value.workroom?.name}
          </b>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            type="button"
            id={styles.createButton}
            onClick={() => {
              setShowCreateAppModal(true);
              setSelectedWorkroomId(props.value.workroom?.id);
            }}
          >
            <AddIcon style={{ marginRight: "5px", marginTop: "-3px" }} />
            Create New App
          </button>
          <div id={styles.settingCard}>
            <SettingIcon
              style={{ color: "#7D7676" }}
              onClick={() => {
                setShowSettingModal(true);
              }}
            />
          </div>
        </div>
      </div>
      <hr style={{ margin: "0 -15px" }} />
      <div style={{ marginTop: "20px" }}>
        <div id={styles.appTypeText}>
          Line App (
          {
            applications?.filter((app) => app.type === applicationType.lineApp)
              .length
          }
          )
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            gap: "50px",
          }}
        >
          {applications.map((item, index) => {
            if (item.type == applicationType.lineApp) {
              return (
                <div key={item.id}>
                  <button
                    type="button"
                    id={styles.applicationCard}
                    onClick={() => navigate(`/appbuilder/${item.id}`)}
                  >
                    <BillIcon color="#7D7676" />
                  </button>
                  <p
                    style={{
                      fontWeight: "bold",
                      color: "#7D7676",
                      marginTop: "5px",
                    }}
                  >
                    {item.name}
                  </p>
                </div>
              );
            }
          })}
        </div>
        <div id={styles.appTypeText}>
          User App (
          {
            applications?.filter((app) => app.type === applicationType.userApp)
              .length
          }
          )
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            gap: "50px",
          }}
        >
          {applications.map((item, index) => {
            if (item.type == applicationType.userApp) {
              return (
                <div key={item.id}>
                  <button
                    type="button"
                    id={styles.applicationCard}
                    onClick={() => navigate(`/appbuilder/${item.id}`)}
                  >
                    <BillIcon color="#7D7676" />
                  </button>
                  <p
                    style={{
                      fontWeight: "bold",
                      color: "#7D7676",
                      marginTop: "5px",
                    }}
                  >
                    {item.name}
                  </p>
                </div>
              );
            }
          })}
        </div>
      </div>
      <CreateAppModal
        refetchFunction={getApplications}
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
