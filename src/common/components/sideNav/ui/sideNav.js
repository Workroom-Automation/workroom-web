import styles from "../styles/sideNav.module.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import HomeIcon from "remixicon-react/Home2LineIcon";
import { useNavigate, useLocation } from "react-router-dom";
import { matchPath } from "react-router";

export default function SideNav({ routes }) {
  let navigate = useNavigate();
  let location = useLocation();
  let parentLocation = location.pathname.split("/")[1];
  return (
    <div id={styles.sideNav}>
      <div
        id={styles.iconContainer}
        onClick={(e) => {
          navigate("/");
        }}
      >
        <HomeIcon id={styles.icon} />
      </div>
      <hr style={{ width: "80%", marginLeft: "10px" }} />
      {routes?.map((item) => {
        let a = matchPath({ path: item.path }, location.pathname);
        if (item.groupBy == parentLocation)
          return (
            <div
              className={a != null ? styles.activeContainer : ""}
              key={item.name}
              id={styles.iconContainer}
              onClick={(e) => {
                navigate(item.path);
              }}
            >
              <div id={styles.icon} style={{ color: a != null ? "white" : "" }}>
                {item.icon}
              </div>
            </div>
          );
      })}
    </div>
  );
}
