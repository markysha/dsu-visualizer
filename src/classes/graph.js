export default class Graph {
  constructor(graph) {
    this.edges = [];
    this.vertices = {};

    graph
    .split("\n")
    .forEach(line => {
      if (!line) return;
      let numbers = line.split(" ").map(word => +word);
      if (numbers.length !== 3) return;
      let [from, to, weight] = numbers;
      this.edges.push({ from, to, weight });
      this.vertices = Object.assign(this.vertices, { to, from });
    });
  }
}