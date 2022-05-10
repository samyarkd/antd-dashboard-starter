import { PieChartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard/Dashboard";

export const superAdmin = [
  {
    key: "1",
    path: "dashboard",
    component: <Dashboard />,
    label: <Link to="dashboard"> داشبورد</Link>,
    icon: <PieChartOutlined />,
  },
];
