export const setGraph = graph => {
  console.log(graph);
  return ({
    type: "UPDATE_GRAPH",
    payload: graph,
  });
}

export const pushClick = click => {
  console.log(click);
  return ({
    type: "PUSH_CLICK",
    payload: click,
  });
}