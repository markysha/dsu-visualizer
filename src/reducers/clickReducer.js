export default (state=[], action) => {
    switch (action.type) {
      case "PUSH_CLICK":
        return [...state, action];
        
      default:
        return state;
    }
  }