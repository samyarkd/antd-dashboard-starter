import { SET_ROUTES } from "../types";
import { superAdmin } from "./routes";

function RoutesReducer(state, action) {
  switch (action.type) {
    case SET_ROUTES:
      return {
        ...state,
        routes: superAdmin,
      };
    default:
      return state;
  }
}

export default RoutesReducer;
