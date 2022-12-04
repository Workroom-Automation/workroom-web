import { triggersActionType } from "../../data/models/triggersActionType.js";

export const TriggersReducers = (state, action) => {
  switch (action.type) {
    case triggersActionType.addTriggers:
      return [...state, {}];
    default:
      return state;
  }
};
