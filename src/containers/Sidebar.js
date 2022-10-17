import React, { useState } from "react";
import HomeIcon from "remixicon-react/Home2LineIcon";
import ServerIcon from "remixicon-react/ServerLineIcon";
import UserIcon from "remixicon-react/User3LineIcon";
import { useNavigate, useLocation } from "react-router-dom";
// import { Home, Clock, Edit, CheckList } from "../Assets/assets";

export default function SideBar() {
  let navigate = useNavigate();
  let location = useLocation();
  const sideBarItems = [
    {
      name: "Master Data",
      icon: ({ color }) => <ServerIcon color={color} />,
      route: "/masterData",
    },
    {
      name: "People",
      icon: ({ color }) => <UserIcon color={color} />,
      route: "/people",
    },
    {
      name: "CheckList",
      //   icon: <CheckList />,
    },
  ];
  const [selected, setSelected] = useState("Master Data");
  return (
    <div className="side-nav-main">
      <div className="side-nav-items">
        <button
          style={{
            background:
              selected === "Home"
                ? "linear-gradient(90deg, #00C6FB 0%, #005BEA 100%)"
                : "white",
          }}
          onClick={(e) => {
            setSelected("Home");
            navigate("/home");
          }}
          className="btn"
        >
          <HomeIcon color={selected === "Home" ? "#FFFFFF" : "#7D7676"} />
        </button>
        <hr />
        {sideBarItems.map((item, index) => {
          return (
            <button
              style={{
                background:
                  selected === item.name
                    ? "linear-gradient(90deg, #00C6FB 0%, #005BEA 100%)"
                    : "white",
              }}
              onClick={(e) => {
                setSelected(item.name);
                console.log(item.route);
                item.route&&navigate(item.route);
              }}
              className="btn"
              key={index}
            >
              {item.icon && (
                <item.icon
                  color={selected === item.name ? "#FFFFFF" : "#7D7676"}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
