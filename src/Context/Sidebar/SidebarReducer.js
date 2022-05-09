import { SIDEBAR_COLLAPSED } from "../types";

export default function SidebarReducer(state, action) {
  switch (action.type) {
    case SIDEBAR_COLLAPSED:
      return { ...state, collapsed: !state.collapsed };
    default:
      return state;
  }
}
