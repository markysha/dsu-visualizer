import React from 'react';
import { connect } from 'react-redux';
import './GraphInput.css';
import { setGraph } from '../actions';

function GraphInput({ graph, setGraph }) {
  return (
    <div className="GraphInput">
      <textarea className="GraphInput-input" value={graph} onChange={event => setGraph(event.target.value)} />
    </div>
  );
}

const mapStateToProps = state => ({
  graph: state.graph,
})

const mapDispatchToProps = dispatch => ({
  setGraph: graph => dispatch(setGraph(graph)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GraphInput);
