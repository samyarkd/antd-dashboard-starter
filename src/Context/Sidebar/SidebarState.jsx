import { useReducer } from "react";
import { SIDEBAR_COLLAPSED } from "../types";
import SidebarContext from "./SidebarContext";
import SidebarReducer from "./SidebarReducer";

const SidebarState = ({ children }) => {
  const initialState = {
    collapsed: false,
  };

  const [state, dispatch] = useReducer(SidebarReducer, initialState);

  // Function to toggle sidebar
  const toggle_sidebar = () => {
    dispatch({ type: SIDEBAR_COLLAPSED });
  };

  return (
    <SidebarContext.Provider value={{ toggle_sidebar, ...state }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarState;
