export default (state=[], action) => {
    switch (action.type) {
      case "PUSH_CLICK":
        return [...state, action.payload];
      case "POP_CLICK":
        state.shift();
        return state;
      default:
        return state;
    }
  }