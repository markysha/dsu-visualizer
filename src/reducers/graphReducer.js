import Graph from '../classes/graph';

export default (state="", action) => {
  switch (action.type) {
    case "UPDATE_GRAPH":
      return action.payload;
      break;
    default:
      return state;
  }
}