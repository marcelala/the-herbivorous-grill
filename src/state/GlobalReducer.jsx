export default function GlobalReducer(state, action) {
  switch (action.type) {
    case "SET_STATE":
      return setState(state, action);
    default:
      throw new Error(`No action type found ${action.type}`);
  }
}

function setState(state, action) {
  const { payload } = action;

  if (payload !== null) return payload;
  return state;
}
