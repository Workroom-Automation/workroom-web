import React from "react";
import MasterData from ".././views/masterData";
import Home from ".././views/home";
import People from "../views/people";
import AppBuilder from "../views/appBuilder";
import AuthorSheet from "../views/appBuilder/authorSheet";
import Sheets from "../features/sheets/ui/sheets";
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
    name: "App Builder",
    component: AppBuilder,
  },
  {
    path: "/appbuilder/authorsheet/:id",
    name: "Author Sheet",
    component: AuthorSheet,
    withoutNav: true,
  },
  {
    path: "/appbuilder/authorsheet/sheets",
    name: "Sheets",
    component: Sheets,
    withoutNav: true,
  },
];
export default allRoutes;
