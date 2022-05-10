import { Layout } from "antd";
import React from "react";
const { Content } = Layout;

function AppContent({ children }) {
  return (
    <Content
      style={{
        margin: "0 1.6rem",
      }}
    >
      <div
        style={{
          margin: "2rem 0",
        }}
      />
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 360,
        }}
      >
        {/* Content */}
        {children}
      </div>
    </Content>
  );
}

export default AppContent;
