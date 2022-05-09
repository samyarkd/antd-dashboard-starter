import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, Layout, Menu } from "antd";
import React from "react";
import SidebarContext from "../../Context/Sidebar/SidebarContext";
const { Header } = Layout;

const menu = (
  <Menu
    items={[
      {
        label: "Samyar",
      },
      {
        danger: true,
        label: "خروج از حساب",
      },
    ]}
  />
);

function AppHeader() {
  const { collapsed, toggle_sidebar } = React.useContext(SidebarContext);

  return (
    <Header className="site-layout-background header" style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: toggle_sidebar,
      })}

      {/* Menu */}
      <div className="header__avatar">
        <span>Samyar</span>

        <Dropdown trigger={["click"]} overlay={menu}>
          <Avatar
            style={{ backgroundColor: "#1890ff" }}
            size="large"
            icon={<UserOutlined />}
          />
        </Dropdown>
      </div>
    </Header>
  );
}

export default AppHeader;
