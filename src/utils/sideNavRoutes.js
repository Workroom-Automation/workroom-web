import ServerIcon from "remixicon-react/ServerLineIcon";
import User3LineIcon from "remixicon-react/User3LineIcon";
import StackshareLineIcon from "remixicon-react/StackshareLineIcon";
import PencilRuler2LineIcon from "remixicon-react/PencilRuler2LineIcon";

export const sideNavRoutes = [
  {
    path: "/masterData/products",
    name: "Products",
    icon: <ServerIcon />,
    groupBy: "masterData",
  },
  {
    path: "/masterData/people",
    name: "People",
    icon: <User3LineIcon />,
    groupBy: "masterData",
  },
  {
    path: "/masterData/stations",
    name: "Stations",
    icon: <StackshareLineIcon />,
    groupBy: "masterData",
  },
  {
    path: "/appbuilder/:appId",
    name: "Sheet List",
    icon: <PencilRuler2LineIcon />,
    groupBy: "",
  },
];
