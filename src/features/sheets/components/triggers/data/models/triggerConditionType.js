export const triggerConditionType = {
  LT: { name: "LessThan", fields: ["Value"] },
  GT: { name: "GreaterThan", fields: ["Value"] },
  LTE: { name: "LessThanAndEqualTo", fields: ["Value"] },
  GTE: { name: "GreaterThanAndEqualTo", fields: ["Value"] },
  EQ: { name: "EqualTo", fields: ["Value"] },
  NEQ: { name: "NotEqualTo", fields: ["Value"] },
  BW: { name: "Between", fields: ["Upper Limit", "Lower Limit"] },
  NBW: { name: "NotInBetween", fields: ["Upper Limit", "Lower Limit"] },
  SE: { name: "Selected" },
  NSE: { name: "NotSelected" },
  BF: { name: "Before", fields: ["Value"] },
  AF: { name: "After", fields: ["Value"] },
};
