export default function MenuReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return addItem(state, action);
    case "SET_MENU":
      return setMenu(state, action);
    default:
      throw new Error(`No action type found ${action.type}`);
  }
}

function addItem(state, action) {
  const { payload } = action;

  if (payload !== null) return [...state, payload];
  return state;
}

function setMenu(state, action) {
  const { payload } = action;

  if (payload !== null) return payload;
  return state;
}
