export default (state=0, action) => {
  console.log(action);
  switch (action.type) {
  case "SET_VIZUALIZATION_PROGRESS":
    return action.payload;
  default:
    return state;
  }
}