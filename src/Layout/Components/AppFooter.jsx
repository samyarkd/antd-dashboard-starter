import { Layout } from "antd";
import React from "react";

const { Footer } = Layout;

function AppFooter() {
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      پنل ادمین تومان کاش. تمام حقوق محفوظ است. &copy; 2022 Tafarda
    </Footer>
  );
}

export default AppFooter;
