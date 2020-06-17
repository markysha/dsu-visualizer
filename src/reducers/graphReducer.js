export default (state="", action) => {
  switch (action.type) {
    case "UPDATE_GRAPH":
      return action.payload;
    default:
      return state;
  }
}