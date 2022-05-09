import { PieChartOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import TomanCashLogo from "../../Assets/Images/TomanCashLogo.png";
import SidebarContext from "../../Context/Sidebar/SidebarContext";

const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [getItem("داشبورد", "1", <PieChartOutlined />)];

function AppSidebar() {
  const { collapsed, toggle_sidebar } = React.useContext(SidebarContext);
  return (
    <Sider
      breakpoint="md"
      collapsible
      collapsed={collapsed}
      onCollapse={toggle_sidebar}
    >
      <div className="logo">
        <img width={24} src={TomanCashLogo} alt="logo" />
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        direction="rtl"
        items={items}
      />
    </Sider>
  );
}

export default AppSidebar;
