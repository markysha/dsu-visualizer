export const setGraph = graph => {
  console.log(graph);
  return ({
    type: "UPDATE_GRAPH",
    payload: graph,
  });
}

export const pushClick = click => {
  return ({
    type: "PUSH_CLICK",
    payload: click,
  });
}

export const popClick = () => {
  return ({
    type: "POP_CLICK",
  });
}

export const setVizualizationProgress = (progress) => {
  return ({
    type: "SET_VIZUALIZATION_PROGRESS",
    payload: progress,
  })
}