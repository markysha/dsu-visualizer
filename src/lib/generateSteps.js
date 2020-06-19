import cytoscape from "cytoscape";
// import cytoscapeStyles from "../components/GraphVisualizer/lib/cytoscapeStyles";

const getStep = (name, cytoscapeJson, steps = []) => {
  return {
    name, 
    cytoscapeJson: {...cytoscapeJson},
    steps,
  };
};

const generateSteps = async (graph, cytoscapeJson) => {
  console.log(cytoscapeJson);
  const cy = cytoscape({headless: true});
  delete cytoscapeJson.layout;
  cy.json(cytoscapeJson);

  const steps = [getStep("Инициализация", {}, [getStep("Инициализация", cytoscapeJson, [])])];
  
  graph.sortedEdgesIndexes.forEach(index => {
    const edge = { ...graph.edges[index] };
    const edgeId = `${edge.from}_${edge.to}`;
    const children = [];
  
    // cy.batch(() => {
    console.log(cy.$id(edgeId).addClass("edge_active"));
    // });
    children.push(getStep(`Посмотрим`, cy.json(false)))

    // cy.batch(() => {
      // console.log("EDGE = ", cy.$id(edgeId));
    cy.$id(edgeId).removeClass("edge_active").addClass(`${edge.inSpanningTree ? "edge_added" : "edge_skipped"}`);
    // });
    children.push(getStep(`${edge.inSpanningTree ? "Добавим" : "Пропустим"}`, cy.json(false)));

    steps.push(getStep(`Ребро ${index}`, cy.json(false), children));
  });

  return steps;
};

export default generateSteps;