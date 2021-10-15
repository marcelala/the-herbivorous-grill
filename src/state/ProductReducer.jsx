export default function ProductReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return addProduct(state, action);
    case "SET_PRODUCTS":
      return setProducts(state, action);
    default:
      throw new Error(`No action type found ${action.type}`);
  }
}

function addProduct(state, action) {
  const { payload } = action;

  if (payload !== null) return [...state, payload];
  return state;
}

function setProducts(state, action) {
  const { payload } = action;
  if (payload !== null) return payload;
  return state;
}
