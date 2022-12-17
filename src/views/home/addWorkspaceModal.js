import React, { useState } from "react";
import { logo } from "../../assets/images";
import CustomButton from "../../components/button";
import CustomModal from "../../components/modals";
import { createWorkroom } from "./api";
import UserSelectionDropdown from "./userSelectionDropdown";

const Header = () => {
  return (
    <div style={{ fontSize: "18px" }}>
      <img src={logo} height="31px" />
      <b> New Workroom Details</b>
    </div>
  );
};
const Footer = ({ onSubmit }) => {
  return (
    <div style={{ margin: "30px 0" }} className="row justify-content-center">
      <div style={{ width: "205px" }}>
        <CustomButton
          title="Create New Workroom"
          background="gradient"
          color="white"
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};
const Body = ({ setShowWorkspaceModal, refetchFunction }) => {
  const [adminUsers, setAdminUsers] = useState([]);
  const [workroomName, setWorkroomName] = useState();
  const onSubmit = async () => {
    const newWorkroom = await createWorkroom(
      {
        name: workroomName,
        admins: adminUsers,
      },
      () => {
        setShowWorkspaceModal(false);
      }
    );
    if (newWorkroom) {
      refetchFunction();
    }
  };
  return (
    <div>
      <div
        style={{ fontSize: "14px", marginBottom: "12px", marginLeft: "11px" }}
      >
        Workroom Name
      </div>
      <input
        value={workroomName}
        onChange={(e) => setWorkroomName(e.target.value)}
        style={{
          width: "100%",
          height: "52px",
          outline: "none",
          border: "1px solid #DADADA",
          paddingLeft: "16px",
          borderRadius: "11px",
        }}
      />
      <div style={{ fontSize: "14px", margin: "17px 0px 7px 11px" }}>
        Assign Admin
      </div>
      <UserSelectionDropdown value={adminUsers} setValue={setAdminUsers} />
      <Footer onSubmit={onSubmit} />
    </div>
  );
};
export default function AddWorkspaceModal({
  showWorkspaceModal = false,
  setShowWorkspaceModal = () => {},
  refetchFunction = () => {},
}) {
  return (
    <div>
      <CustomModal
        body={() => (
          <Body
            setShowWorkspaceModal={setShowWorkspaceModal}
            refetchFunction={refetchFunction}
          />
        )}
        header={() => <Header />}
        show={showWorkspaceModal}
        setShow={setShowWorkspaceModal}
      />
    </div>
  );
}
