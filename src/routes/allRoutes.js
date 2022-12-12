import React from "react";
import MasterData from ".././views/masterData";
import Home from ".././views/home";
import People from "../views/people";
import AppBuilder from "../views/appBuilder";
import Sheets from "../features/sheets/ui/sheets.js";
import SheetList from "../features/sheetList/ui/sheetList.js";

const allRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    withoutNav: true,
  },
  {
    path: "/masterData",
    name: "Master Data",
    component: MasterData,
  },
  {
    path: "/people",
    name: "People",
    component: People,
  },
  {
    path: "/appbuilder",
    name: "Sheet List",
    component: SheetList,
  },
  {
    path: "/appbuilder/authorsheet/sheets",
    name: "Sheets",
    component: Sheets,
    withoutNav: true,
  },
];
export default allRoutes;
