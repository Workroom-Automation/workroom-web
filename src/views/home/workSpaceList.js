import React from "react";
import Card from "../../components/cards/defaultCard";
import { logo, emptyProfile } from "../../assets/images/index";
import MenuIocon from "remixicon-react/More2LineIcon"
const CardContent = ({ workspace }) => {
  const countCardStyle = {
    width: "39px",
    height: "32px",
    padding: "9px 8px",
    borderRadius: "11px",
    margin: "3px 0 0 0",
  };
  return (
    <div>
      <div className="d-flex justify-content-between ">
        <div>
          <img height="30px" src={logo} />
          <b style={{ fontSize: "14px" }}>{workspace?.name}</b>
        </div>
        <div className="d-flex">
          <div
            style={{ fontSize: "14px", color: "#7D7676" }}
            className="text-center"
          >
            <span>Apps</span>
            <Card title={workspace?.appCount} style={countCardStyle} />
          </div>
          <div
            style={{ fontSize: "14px", color: "#7D7676" }}
            className="text-center"
          >
            <span>Users</span>
            <Card title={workspace?.appCount} style={countCardStyle} />
          </div>
          <div style={{ fontSize: "14px", color: "#7D7676" }}>
            <span>Admin</span>
            <Card
            style={{padding: "3px", borderRadius: "11px",}}
              content={() => {
                return (
                  <div>
                    <img height="18px" src={emptyProfile} />{" "}
                    {workspace?.adminName}
                  </div>
                );
              }}
            />
          </div>
          <MenuIocon/>
        </div>
      </div>
      <hr />
      <div>app list</div>
      <hr />
      <div>View Analytics</div>
    </div>
  );
};
export default function WorkSpaceList({ data }) {
  return (
    <div className="row">
      {data &&
        data.length > 0 &&
        data.map((workspace, idx) => {
          return (
            <div className="col-6" key={idx}>
              <Card
                style={{ textAlign: "left", padding: "20px 17px" }}
                // content={(props) => <CardContent workspace={workspace} />}
              />
            </div>
          );
        })}
    </div>
  );
}
