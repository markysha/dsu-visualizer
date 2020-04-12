import Graph from '../classes/graph';

export default (state="", action) => {
  switch (action.type) {
    case "UPDATE_GRAPH":
      let x = new Graph(action.payload);
      return action.payload;
      break;
    default:
      return state;
  }
}