import React from 'react';
import './App.css';
import GraphInput from "./components/GraphInput/index";
import GraphVisualizer from "./components/GraphVisualizer/index";
import VisualizationController from "./components/VisualizationController/index";

function App() {
  return (
    <div className="App">
      <GraphInput />
      <GraphVisualizer />
      <VisualizationController />
    </div>
  );
}

export default App;
