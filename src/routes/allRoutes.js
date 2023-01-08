import React from "react";
import MasterData from ".././views/masterData";
import Home from ".././views/home";
import People from "../views/people";
import AppBuilder from "../views/appBuilder";
import Sheets from "../features/sheets/ui/sheets.js";
import SheetList from "../features/sheetList/ui/sheetList.js";
import Workroom from "../features/workroom/ui/workroom.js";
import Products from "../features/products/ui/products.js";
import Stations from "../features/stations/ui/stations.js";

const allRoutes = [
  {
    path: "/",
    name: "Workroom",
    component: Workroom,
    withoutNav: true,
  },
  {
    path: "/masterData/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/masterData/stations",
    name: "Stations",
    component: Stations,
  },
  {
    path: "/masterData/people",
    name: "People",
    component: People,
  },
  {
    path: "/appbuilder/:appId",
    name: "Sheet List",
    component: SheetList,
  },
  {
    path: "/appbuilder/:appId/authorsheet/:sheetId",
    name: "Sheets",
    component: Sheets,
    withoutNav: true,
  },
];
export default allRoutes;
