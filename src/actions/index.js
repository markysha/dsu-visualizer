export const setGraph = graph => {
  console.log(graph);
  return ({
  type: "UPDATE_GRAPH",
  payload: graph,
})}