import { triggersActionType } from "../../data/models/triggersActionType.js";

export const TriggersReducers = (state, action) => {
  switch (action.type) {
    case triggersActionType.addTriggers:
      let initialState = {
        name: "",
        condition_type: "",
        condition: {},
        action_type: "",
        action: {
          body: "",
          subject: "",
          to: [],
        },
      };
      return [...state, initialState];
    case triggersActionType.removeTriggers:
      state.splice(action.data, 1);
      return [...state];
    case triggersActionType.editTriggers:
      state[action.data.index] = action.data.trigger;
      return [...state];
    default:
      return state;
  }
};
