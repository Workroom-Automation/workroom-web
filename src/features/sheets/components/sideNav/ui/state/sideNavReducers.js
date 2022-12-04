import { sideNavActionType } from "../../data/models/sideNavActionType.js";

export const SideNavReducers = (state, action) => {
  switch (action.type) {
    case sideNavActionType.addProperties:
      let initialState = {
        properties: {},
      };
      initialState.properties["type"] = action.data.id;
      return [...state, initialState];
    default:
      return state;
  }
};
