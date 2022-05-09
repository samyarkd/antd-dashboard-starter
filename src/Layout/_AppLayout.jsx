import { Layout } from "antd";
import React from "react";
import AppContent from "./Components/AppContent";
import AppFooter from "./Components/AppFooter";
import AppHeader from "./Components/AppHeader";
import AppSidebar from "./Components/AppSidebar";
import "./_AppLayout.css";

class AppLayout extends React.Component {
  render() {
    return (
      <Layout
        dir="rtl"
        hasSider
        style={{
          minHeight: "100vh",
        }}
      >
        <AppSidebar />
        <Layout className="site-layout">
          <AppHeader />
          <AppContent />
          <AppFooter />
        </Layout>
      </Layout>
    );
  }
}

export default AppLayout;
