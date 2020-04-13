import React from 'react';
import './App.css';
import GraphInput from "./components/GraphInput";
import GraphVisualizer from "./components/GraphVisualizer";

function App() {
  return (
    <div className="App">
      <GraphInput />
      <GraphVisualizer />
    </div>
  );
}

export default App;
