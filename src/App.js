/* eslint-disable react-hooks/exhaustive-deps */
import { Spin } from "antd";
import "antd/dist/antd.min.css";
import React, { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import RoutesContext from "./Context/Routes/RoutesContext";
import AppLayout from "./Layout/_AppLayout";

const App = () => {
  const { setRoutes, routes } = useContext(RoutesContext);

  // temporary solution for routing
  useEffect(() => {
    setRoutes("admin");
  }, []);

  // While Loading User info shows 👇
  if (false) {
    return (
      <Spin
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        size="large"
        tip="Loading..."
      />
    );
  }
  console.log("routes", routes);
  return (
    <Routes>
      {/* Main App */}
      <Route path="app/*" element={<AppLayout />}>
        {/* Handling Routes  👇*/}
        {routes.map((route, index) => {
          const { path, component } = route;
          return <Route key={index} path={path} element={component} />;
        })}

        {/* No Match case */}
        <Route path="*" element={<Navigate replace to="dashboard" />} />
      </Route>

      {/* 404 page handling */}
      <Route path="*" element={<Navigate replace to="app/dashboard" />} />
    </Routes>
  );
};

export default App;
