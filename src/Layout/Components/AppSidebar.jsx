import { Layout, Menu } from "antd";
import React, { useContext } from "react";
import TomanCashLogo from "../../Assets/Images/TomanCashLogo.png";
import RoutesContext from "../../Context/Routes/RoutesContext";
import SidebarContext from "../../Context/Sidebar/SidebarContext";

const { Sider } = Layout;

function AppSidebar() {
  const state = useContext(RoutesContext);
  const { routes } = state;
  const { collapsed, toggle_sidebar } = useContext(SidebarContext);

  console.log("routes", state);
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
        items={routes}
      />
    </Sider>
  );
}

export default AppSidebar;
