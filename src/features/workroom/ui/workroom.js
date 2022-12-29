import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NotificationBadgeIcon from "remixicon-react/NotificationBadgeLineIcon";
import ServerIcon from "remixicon-react/ServerLineIcon";
import AddIcon from "remixicon-react/AddCircleLineIcon";
import CustomButton from "../../../components/button";
import { useNavigate } from "react-router-dom";
import WorkroomList from "../../../views/home/workroomList";
import AddWorkspaceModal from "../../../views/home/addWorkspaceModal";
import { apiClientType } from "../../../clients/data/models/apiClientType.js";
import { ApiClient } from "../../../clients/apiClient.js";
import PrimaryButton from "../../../common/crunches/primaryButton/primaryButton.js";
import styles from "../styles/workroom.module.css";
import WorkroomCard from "../components/workroomCard/ui/workroomCard.js";
export default function Workroom() {
  let navigate = useNavigate();
  const [workroomData, setWorkroomData] = useState([]);
  const [showWorkspaceModal, setShowWorkspaceModal] = useState(false);
  useEffect(() => {
    getWorkrooms();
  }, []);
  const getWorkrooms = async () => {
    let response = await ApiClient(
      apiClientType.get,
      process.env.REACT_APP_MASTER_BASE_URL,
      `/workroom/`,
      {},
      { "x-user-id": "Harry Potter" }
    );
    if (response) {
      console.log(response);
      setWorkroomData(response.workrooms);
    }
  };
  return (
    <Container fluid={true} style={{ padding: "40px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <b style={{ fontSize: "24px" }}>Hi Abhinav</b>
        <CustomButton
          title="Master Data"
          color="#000000"
          icon={ServerIcon}
          padding="17px 12px"
          width="145px"
          onClick={() => navigate("/masterData/products")}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "50px",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <div id={styles.requestsCard}>
          <NotificationBadgeIcon
            style={{ color: "#7D7676", marginRight: "10px" }}
          />
          <b style={{ fontSize: "14px" }}>Requests</b>
          <div
            style={{ fontWeight: "bold", color: "#009AFF", fontSize: "30px" }}
          >
            02
          </div>
        </div>
        <div style={{ marginTop: "16px" }}>
          <PrimaryButton
            value={{
              child: (
                <>
                  <AddIcon
                    style={{ marginRight: "10px", marginBottom: "3px" }}
                  />
                  Create New Workroom
                </>
              ),
              onClick: () => {
                setShowWorkspaceModal(true);
              },
            }}
          />
        </div>
      </div>
      <Row xs={1} md={1} lg={2}>
        {workroomData.map((item, index) => {
          return (
            <Col key={item.id}>
              <WorkroomCard value={{ workroom: item }} />
            </Col>
          );
        })}
      </Row>

      <AddWorkspaceModal
        refetchFunction={getWorkrooms}
        showWorkspaceModal={showWorkspaceModal}
        setShowWorkspaceModal={setShowWorkspaceModal}
      />
    </Container>
  );
}
