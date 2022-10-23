import logo from "./logo.svg";
import "./App.css";
import authRoutes from "./routes/authRoutes";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./containers/Header";
import Layout from "./containers/Layout";
import Sidebar from "./containers/Sidebar";
import allRoutes from "./routes/allRoutes";
function Home() {
  return <div>Home</div>;
}

function App() {
  let location = useLocation();
  const currentRoute = location.pathname;
  const routesWithNavigation = allRoutes.map((route, idx) => {
    return route.path;
  });
  console.log(routesWithNavigation, currentRoute);
  return (
    <>
      <div
        style={{
          display: routesWithNavigation.includes(currentRoute)
            ? "block"
            : "none",
        }}
      >
        <Header />
      </div>
      <div
        style={{
          display:
            routesWithNavigation.includes(currentRoute) &&
            currentRoute != "/"
              ? "block"
              : "none",
        }}
      >
        <Sidebar />
      </div>
      <Routes>
        {authRoutes.map((route, idx) => {
          return (
            route.component && (
              <Route
                key={idx}
                path={route.path}
                name={route.name}
                element={<Layout component={route.component} />}
              />
            )
          );
        })}
        {allRoutes.map((route, idx) => {
          return (
            route.component && (
              <Route
                key={idx}
                path={route.path}
                name={route.name}
                element={<Layout type={route.name==="Home"?"home":"with-nav"} component={route.component} />}
              />
            )
          );
        })}

        {/* <Route exact path="/" element={<Layout />} /> */}
      </Routes>
    </>
  );
}

export default App;
