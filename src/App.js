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
import Layout from "./containers/Layout";
import allRoutes from "./routes/allRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import CustomNavbar from "./common/components/navbar/ui/navbar.js";
import SideNav from "./common/components/sideNav/ui/sideNav.js";
import Container from "react-bootstrap/Container";
import { sideNavRoutes } from "./utils/sideNavRoutes.js";

export default function App() {
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

  const [token, setToken] = useState("");
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    getAccessTokenSilently,
  } = useAuth0();
  useEffect(() => {
    if (isAuthenticated) {
      (async () => {
        try {
          const response = await getAccessTokenSilently({
            audience: process.env.REACT_APP_AUDIENCE,
            scope: process.env.REACT_APP_SCOPE,
          });
          localStorage.setItem("token", response);
          setToken(response);
        } catch (e) {
          console.error(e);
        }
      })();
    }
  }, [getAccessTokenSilently, isAuthenticated]);

  if (isLoading) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "200px",
        }}
      >
        Loading...
      </div>
    );
  }
  if (isAuthenticated) {
    return (
      <div>
        <CustomNavbar />
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: checkRouteWithNav(routesWithSideNavigation, currentRoute)
                ? "block"
                : "none",
            }}
          >
            <SideNav routes={sideNavRoutes} />
          </div>
          <Container fluid={true}>
            <Routes>
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
                            checkRouteWithNav(
                              routesWithSideNavigation,
                              route.path
                            )
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
            </Routes>
          </Container>
        </div>
      </div>
    );
  } else {
    loginWithRedirect();
  }
}

const checkRouteWithNav = (routeList, currentRoute) => {
  let isWIthNav = false;
  routeList.map((route) => {
    const match = matchPath({ path: route }, currentRoute);
    if (match) {
      isWIthNav = true;
    }
  });
  return isWIthNav;
};
