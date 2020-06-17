import DSU from "./dsu";
import _ from "lodash";
export default class Graph {
  constructor(graph) {
    this.edges = [];
    this.vertices = {};

    graph
    .split("\n")
    .forEach(line => {
      if (!line) return;
      let numbers = line.split(" ").filter(number => number !== "");
      if (numbers.length !== 3) return;
      let [from, to, weight] = numbers;
      this.edges.push({ from, to, weight });
      this.vertices = Object.assign(this.vertices, { [to]: to, [from]: from });
    });

    this.sortedEdgesIndexes = new Array(this.edges.length).fill(0).map((_, i) => i).sort((a, b) => {
      return +this.edges[a].weight - this.edges[b].weight;
    });

    console.log(new Array(this.edges.length).map((_, i) => i));

    const dsu = new DSU(_.size(this.vertices));
    let cost = 0;

    this.sortedEdgesIndexes.forEach(index => {
      const edge = this.edges[index];
      edge.inSpanningTree = dsu.unite(edge.from, edge.to);
      console.log("edge = ", edge, edge.inSpanningTree);
      if (edge.inSpanningTree) cost += +edge.weight;
    });

    console.log("SPANNING TREE COST = ", cost);
  }
}