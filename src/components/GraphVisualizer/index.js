import React from 'react';
import { connect } from 'react-redux';
import Graph from "../../classes/graph";
import cytoscape from "cytoscape";
import styles from "./styles.module.css";
import cytoscapeStyles from "./lib/cytoscapeStyles"
import { popClick } from "../../actions";
import generateSteps from "../../lib/generateSteps";

class GraphVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.status = {
      type: "PAUSE",
      position: { index: 0, step: 0 }, 
      direction: 1,
    };
  }

  processClick(click) {
    switch (click) {
      case "CONTROLLER_START_VISUALIZATION":
        this.visualizationStart();
        break;

      case "CONTROLLER_PLAY":
        this.visualizationStart();
        break;
      
      case "CONTROLLER_PAUSE":
        this.visualizationPause();
        break;

      case "CONTROLLER_BEFORE":
        this.visualizationPause();
        this.visualizationPrevStep();
        break;
      
      case "CONTROLLER_NEXT":
        this.visualizationPause();
        this.visualizationNextStep();
        break;

      case "CONTROLLER_SKIP_PREVIOUS":
        this.visualizationPause();
        if (this.status.position.step === 0) {
          this.setStatus({position:{index: this.status.position.index - 1, step: 1}});
        } else {
          this.setStatus({position:{index: this.status.position.index, step: 1}});  
        }
        this.visualizationPrevStep();
        break;

      case "CONTROLLER_SKIP_NEXT":
        this.visualizationPause();
        this.setStatus({position:{index: this.status.position.index, step: 1000}});
        this.visualizationNextStep();
        break;
      
      default:
        break;
    }
  }

  visualizationStep() {
    console.log("visualizationStep");
    if (this.status.type === "RUN") {
      if (this.status.direction > 0) {
        this.visualizationNextStep();
      } 
      if (this.status.direction < 0) {
        this.visualizationPrevStep();
      } 
    }
  }

  visualizationNextStep() {
    console.log("visualizationNextStep");
    
    if (this.status.position.index >= this.steps.length) {
      this.visualizationPause();
      return;
    }

    if (this.status.position.step + 1 >= this.steps[this.status.position.index].steps.length) {
      this.setStatus((status) => {
        ++status.position.index;
        status.position.step = 0;
        return status;
      });
    } else {
      this.setStatus((status) => {
        ++status.position.step;
        return status;
      });
    }

    const { index, step } = this.status.position;

    if (index >= this.steps.length) {
      this.visualizationPause();
      return;
    }
    console.log(index, step);
    if (index < this.steps.length && step < this.steps[index].steps.length) {
      // console.log(this.steps[index].steps[step].cytoscapeJson);
      this.cy.json(this.steps[index].steps[step].cytoscapeJson);
    }
    
  }

  visualizationPrevStep() {
    console.log("visualizationPrevStep");
    
    if (this.status.position.index === 0 && this.status.position.step === 0) {
      this.visualizationPause();
      return;
    }

    if (this.status.position.step === 0) {
      this.setStatus((status) => {
        --status.position.index;
        status.position.step = this.steps[status.position.index].steps.length - 1;
        return status;
      });
    } else {
      this.setStatus((status) => {
        --status.position.step;
        return status;
      });
    }
    
    const { index, step } = this.status.position;

    console.log(index, step);
    if (index < this.steps.length && step < this.steps[index].steps.length) {
      // console.log(this.steps[index].steps[step].cytoscapeJson);
      this.cy.json(this.steps[index].steps[step].cytoscapeJson);
    }    
  }

  visualizationStart() {
    // console.log("visualizationStart");
    if (this.status.type === "RUN") return;
    
    this.setStatus({type: "RUN"});
    this.timerId = setInterval(() => this.visualizationStep(), 700);
  }

  visualizationPause() {
    this.setStatus({type: "PAUSE"});
    if (this.timerId) clearInterval(this.timerId);
  }

  setStatus(newStatus) {
    if (typeof newStatus === "object") {
      this.status = {
        ...this.status,
        ...newStatus,
      };
    } else {
      this.status = {
        ...this.status,
        ...newStatus({...this.status}),
      };
    }
  }

  init(graph) {
    this.setStatus({
      type: "PAUSE",
      position: { index: 0, step: 0 }, 
      direction: 1,
    });
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
      style: cytoscape.stylesheet()
        .selector("node")
          .css(cytoscapeStyles.node)
        .selector("edge")
          .css(cytoscapeStyles.edge)
        .selector(".edge_active")
          .css(cytoscapeStyles.edge_active)
        .selector(".edge_added")
          .css(cytoscapeStyles.edge_added)
        .selector(".edge_skipped")
          .css(cytoscapeStyles.edge_skipped)
        .selector(".edge_disabled")
          .css(cytoscapeStyles.edge_disabled)
        ,
      ...cytoscapeStyles.root,
    });

    generateSteps(this.graph, {...this.cy.json()}).then(data => {this.steps = data});
    console.log(this.steps);
    // this.cy.nodes().ungrabify();
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log("shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", this.status.position);

    if (!this.graph || this.props.graph.graphString !== prevProps.graph.graphString) {
      this.init(this.props.graph);
    }

    if (this.props.clicks.length) {
      this.processClick(this.props.clicks.shift());
      this.props.popClick();
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

const mapDispatchToProps = dispatch => ({
  popClick: () => dispatch(popClick()),
})

export default connect(mapStateToProps, mapDispatchToProps)(GraphVisualizer);
