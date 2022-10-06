import React, {useState} from "react";
import { logo } from "../../assets/images";
import CustomButton from "../../components/button";
import CustomModal from "../../components/modals";
import UserSelectionDropdown from "./userSelectionDropdown";
const Header = () => {
  return (
    <div style={{ fontSize: "18px" }}>
      <img src={logo} height="31px" />
      <b> New Workroom Details</b>
    </div>
  );
};
const Footer = () => {
  return (
    <div style={{ margin: "30px 0" }} className="row justify-content-center">
      <div style={{ width: "205px" }}>
        <CustomButton
          title="Create New Workroom"
          background="gradient"
          color="white"
        />
      </div>
    </div>
  );
};
const Body = () => {
 
  const [users, setUsers] = useState([]);
  return (
    <div>
      <div
        style={{ fontSize: "14px", marginBottom: "12px", marginLeft: "11px" }}
      >
        Workroom Name
      </div>
      <input
        style={{
          width: "100%",
          height: "52px",
          outline: "none",
          border: "1px solid #DADADA",
          paddingLeft: "16px",
          borderRadius:'11px'
        }}
      />
      <div style={{ fontSize: "14px",margin:"17px 0px 7px 11px"}}>Assign Admin</div>
        <UserSelectionDropdown
          value={users}
          setValue={setUsers}
          />
    </div>
  );
};
export default function AddWorkspaceModal({
  showWorkspaceModal = false,
  setShowWorkspaceModal = () => {},
}) {
  return (
    <div>
      <CustomModal
        body={() => <Body />}
        footer={() => <Footer/>}
        header={() => <Header />}
        show={showWorkspaceModal}
        setShow={setShowWorkspaceModal}
      />
    </div>
  );
}
