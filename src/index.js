import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import RoutesState from "./Context/Routes/RoutesState";
import SidebarState from "./Context/Sidebar/SidebarState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Beginning of Context States 👇 */}
      <RoutesState>
        <SidebarState>
          {/* App */}
          <App />
        </SidebarState>
      </RoutesState>
    </BrowserRouter>
  </React.StrictMode>
);
