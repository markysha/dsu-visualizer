import React from 'react';
import { connect } from 'react-redux';
import Graph from "../../classes/graph";
import cytoscape from "cytoscape";
import styles from "./styles.module.css";
import cytoscapeStyles from "./lib/cytoscapeStyles"

class GraphVisualizer extends React.Component {
  processClick(click) {

  }

  init(graph) {
    this.graph = graph;

    this.cy = cytoscape({
      container: document.querySelector('#GraphVisualizer'), // container to render in
      elements: [
        ...Object.keys(this.graph.vertices).map(key => ({
          data: {id: key}
        })),
        ...this.graph.edges.map(edge => ({
          data: {id: edge.from + "_" + edge.to, source: edge.from, target: edge.to, weight: edge.weight }
        })),
      ],
      style: [
        { selector: 'node', style: cytoscapeStyles.node },
        { selector: 'edge', style: cytoscapeStyles.edge },
      ],
      ...cytoscapeStyles.root,
    });
    // this.cy.nodes().ungrabify();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.graph !== this.props.graph;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.graph !== this.props.graph) {
      this.init(this.props.graph);
    }
  }

  render() {
    return (
      <div className={styles.GraphVisualizer} id={"GraphVisualizer"} />
    );
  }
}

const mapStateToProps = state => ({
  graph: new Graph(state.graph),
  clicks: state.clicks,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(GraphVisualizer);
