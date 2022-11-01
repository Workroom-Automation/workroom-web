import logo from "./logo.svg";
import "./App.css";
import authRoutes from "./routes/authRoutes";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  matchPath,
} from "react-router-dom";
import Header from "./containers/Header";
import Layout from "./containers/Layout";
import Sidebar from "./containers/Sidebar";
import allRoutes from "./routes/allRoutes";
function Home() {
  return <div>Home</div>;
}

const checkRouteWithNav = (routeList, currentRoute) => {
  let isWIthNav = false;
  routeList.map((route) => {
    const match = matchPath({ path: route }, currentRoute);
    if (match) {
      console.log(route, currentRoute);
      isWIthNav = true;
    }
  });
  return isWIthNav;
};

function App() {
  let location = useLocation();
  const currentRoute = location.pathname;
  const routesWithTopNavigation = allRoutes.map((route) => {
    return route.path;
  });
  const routesWithSideNavigation = allRoutes
    .filter((route) => {
      if (route?.withoutNav) {
      } else {
        return route.path;
      }
    })
    .map((route) => {
      return route.path;
    });
  console.log(routesWithTopNavigation, currentRoute);

  return (
    <>
      <div
        style={{
          display: checkRouteWithNav(routesWithTopNavigation, currentRoute)
            ? "block"
            : "none",
        }}
      >
        <Header />
      </div>
      <div
        style={{
          display: checkRouteWithNav(routesWithSideNavigation, currentRoute)
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
                element={
                  <Layout
                    type={
                      checkRouteWithNav(routesWithSideNavigation, route.path)
                        ? "with-nav"
                        : "without-nav"
                    }
                    component={route.component}
                  />
                }
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
