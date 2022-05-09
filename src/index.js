import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SidebarState from "./Context/Sidebar/SidebarState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SidebarState>
      <App />
    </SidebarState>
  </React.StrictMode>
);
