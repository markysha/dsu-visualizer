import React from 'react';
import { connect } from 'react-redux';
import Graph from "../../classes/graph";
import cytoscape from "cytoscape";
import styles from "./styles.module.css";


class GraphVisualizer extends React.Component {
  componentDidUpdate() {
    this.graph = this.props.graph;

    console.log(document.querySelector('#GraphVisualizer'));
    console.log(this.graph);
    this.cy = cytoscape({

      container: document.querySelector('#GraphVisualizer'), // container to render in
    
      elements: [
        ...Object.keys(this.graph.vertices).map(key => ({
          data: {id: key}
        })),
        ...this.graph.edges.map(edge => ({
          data: {id: edge.from + "_" + edge.to, source: edge.from, target: edge.to, weight: edge.weight }
        })),
        // { // edge ab
        //   data: { id: 'ab', source: 'a', target: 'b' }
        // }
      ],
    
      style: [ // the stylesheet for the graph
        {
          selector: 'node',
          style: {
            'background-color': '#666',
            'label': 'data(id)'
          }
        },
    
        {
          selector: 'edge',
          style: {
            'width': 3,
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle',
            'label': 'data(weight)' 
          }
        }
      ],
      
      // minZoom: 1,
      // maxZoom: 1,

      layout: {
        name: 'breadthfirst',
        fit: true,
        // animate: true,
        // animationDuration: 500,
      },
      
      userZoomingEnabled: false,
      userPanningEnabled: false,
      // autolock: true,

    });
    this.cy.fit();
    this.cy.nodes().ungrabify();
  }

  render() {
    return (
      <div className={styles.GraphVisualizer} id={"GraphVisualizer"}>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  graph: new Graph(state.graph),
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(GraphVisualizer);
