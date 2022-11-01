import React, { useState, useEffect } from "react";
import AddIcon from "remixicon-react/AddCircleLineIcon";
import CustomButton from "../../components/button";
import Tabs from "../../components/tabs";
import PeopleTable from "./peopleTable";
import Teams from "./teams";
import { UserCustomComponent } from "./tableComponents";
import CustomModal from "../../components/modals";
import { WorkerIcon } from "../../assets/icons/index";
import BuildingIcon from "remixicon-react/BuildingLineIcon";
import CustomDropdown from "../../components/dropdown";
import UserSelectionDropdown from "../home/userSelectionDropdown";
import AddNewModal from "../../components/modals/AddNewModal";
const tabList = ["Workforce", "Suppliers", "Teams"];
export default function People() {
  const [activeTab, setActiveTab] = useState(0);
  const [createTeamModal, setCreateTeamModal] = useState(false);
  const [newUserModal, setNewUserModal] = useState(false);
  const [userType, setUserType] = useState("workforce");
  useEffect(()=>{
    console.count();
  })
  return (
    <div>
      <CustomButton
        title="People"
        // icon={() => <ServerLineIcon color="#7D7676" />}
        width="100px"
        padding="15px 0"
      />
      <div
        className="d-flex justify-content-between"
        style={{ margin: "38px 34px 22px 0" }}
      >
        <div>
          <Tabs
            tabWidth="131px"
            tabHeight="50px"
            tabs={tabList}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        <div>
          <CustomButton
            onClick={() => {
              if (tabList[activeTab] === "Teams") {
                setCreateTeamModal(true);
              } else {
                setNewUserModal(true);
              }
            }}
            padding="12px 10px"
            color="#FFFFFF"
            background="gradient"
            title={
              tabList[activeTab] === "Teams"
                ? "Create New Team"
                : "Add New User"
            }
            fontWeight="700"
            icon={() => <AddIcon color="#ffffff" />}
          />
        </div>
      </div>
      <div style={{ marginRight: "34px", paddingRight: "24px" }}>
        <Table selectedTab={tabList[activeTab]} />
      </div>
      {/* code reduction needed */}
      {/* <CustomModal
        show={newUserModal}
        setShow={setNewUserModal}
        body={() => (
          <div>
            <div className="d-flex align-items-center">
              <input
                onChange={() => setUserType("workforce")}
                checked={userType === "workforce" ? true : false}
                type="radio"
              />
              <label style={{ margin: "0 8px 0 5px" }}>
                <WorkerIcon />
                <span style={{ marginLeft: "5px" }}>Workforce</span>
              </label>
              <input
                onChange={() => setUserType("supplier")}
                checked={userType === "supplier" ? true : false}
                type="radio"
              />
              <label style={{ marginLeft: "5px" }}>
                <BuildingIcon color="#7D7676" /> <span>Supplier</span>
              </label>
            </div>
            <div style={{ marginTop: "21px" }}>
              <div className="add-user-input">
                <label>User Email-ID</label>
                <input />
              </div>
              <div className="add-user-input">
                <label>Designation (Optional)</label>
                <input />
              </div>
            </div>
          </div>
        )}
        header={() => (
          <div style={{ fontWeight: "700", fontSize: "20px" }}>
            New User Details
          </div>
        )}
        footer={() => (
          <div
            style={{ marginBottom: "22px" }}
            className="d-flex justify-content-center"
          >
            <CustomButton
              padding="10px 15px"
              color="#ffffff"
              width="132px"
              background="gradient"
              title="Invite User"
            />
          </div>
        )}
      /> */}
      <AddNewModal
        show={newUserModal}
        setShow={setNewUserModal}
        types={[
          {
            name: "Workforce",
            icon: () => <WorkerIcon />,
          },
          { name: "Supplier", icon: () => <BuildingIcon color="#7D7676" /> },
        ]}
        selectedType={userType}
        setSelectedType={setUserType}
        buttonName="Invite User"
        header="New User Details"
        inputs={[
          {label: "User Email-ID", value:"email"},
          {label: "Designation (Optional)", value:"designation" },
        ]}
      />

      <CustomModal
        body={() => (
          <div>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                borderRadius: "11px",
                border: "1px solid #DADADA",
                margin: "12px 0 20px 0",
                background: "#D0EBFF",
                padding: "23px 0",
                width: "100%",
              }}
            >
              New Team Details
            </div>
            <div>
              <div className="add-user-input">
                <label>User Email-ID</label>
                <input />
              </div>
              <div className="add-user-input">
                <label>Designation (Optional)</label>
                <UserSelectionDropdown border="none" />
              </div>
            </div>
          </div>
        )}
        footer={() => (
          <div
            style={{ marginBottom: "22px" }}
            className="d-flex justify-content-center"
          >
            <CustomButton
              padding="10px 15px"
              color="#ffffff"
              width="132px"
              background="gradient"
              title="Invite User"
            />
          </div>
        )}
        show={createTeamModal}
        setShow={setCreateTeamModal}
      />
    </div>
  );
}

const Table = ({ selectedTab }) => {
  const workforceColumns = [
    {
      title: "User Name",
      dataIndex: "name",
      customComponent: ({ data }) => <UserCustomComponent name={data} />,
    },
    {
      title: "Designation (Optional)",
      dataIndex: "des",
    },
    {
      title: "E-mail ID",
      dataIndex: "email",
    },
    {
      title: "User Roles",
      dataIndex: "roles",
      customComponent: ({ data }) => {
        return (
          <CustomButton
            title={String(data).padStart(2, "0")}
            border="1px solid #DADADA"
            borderRadius="11px"
            width="46px"
            fontSize="18px"
            // height="43px"
            padding=" 7px"
            color={data === 0 ? "#A49F9F" : "#000000"}
          />
        );
      },
    },
  ];
  const workforceData = [
    { name: "Vip", des: "Junior", email: "qwqw1@gmail.com", roles: 2 },
    { name: "Vip", des: "Junior", email: "qwqw1@gmail.com", roles: 9 },
    { name: "Vip", des: "Junior", email: "qwqw1@gmail.com", roles: 4 },

    { name: "Vip", des: "Junior", email: "qwqw1@gmail.com", roles: 0 },
    { name: "Vip", des: "Junior", email: "qwqw1@gmail.com", roles: 9 },
    { name: "Vip", des: "Junior", email: "qwqw1@gmail.com", roles: 4 },
  ];

  if (selectedTab === "Workforce") {
    return <PeopleTable columns={workforceColumns} data={workforceData} />;
  }
  if (selectedTab === "Suppliers") {
    return (
      <PeopleTable
        columns={[
          {
            title: "Supplier Name",
            dataIndex: "name",
            customComponent: ({ data }) => <UserCustomComponent name={data} />,
          },
          { title: "Designation (Optional)", dataIndex: "des" },
          { title: "E-mail ID", dataIndex: "email" },
          { title: "Role", dataIndex: "roles" },
          { title: "Edit", dataIndex: "edit" },
        ]}
        data={workforceData}
      />
    );
  }
  if (selectedTab === "Teams") {
    return <Teams />;
  } else return <div></div>;
};
