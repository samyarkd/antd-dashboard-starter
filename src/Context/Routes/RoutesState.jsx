import { useReducer } from "react";
import { SET_ROUTES } from "../types";
import RoutesContext from "./RoutesContext";
import RoutesReducer from "./RoutesReducer";

const RoutesState = ({ children }) => {
  const initialState = {
    routes: [],
  };

  const [state, dispatch] = useReducer(RoutesReducer, initialState);

  // SetRoutes Function - this function will set routes based on user role.
  const setRoutes = (role) => {
    dispatch({ type: SET_ROUTES, payload: role });
  };

  return (
    <RoutesContext.Provider
      value={{
        routes: state.routes,
        // Functions
        setRoutes,
      }}
    >
      {children}
    </RoutesContext.Provider>
  );
};

export default RoutesState;
