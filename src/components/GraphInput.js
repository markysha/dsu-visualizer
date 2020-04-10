import React, {useState} from 'react';
import './GraphInput.css';

function App() {
  const [graph, setGraph] = useState(" ");

  return (
    <div className="GraphInput">
      <input className="GrapghInput-input" type="text" value={graph} onChange={event => setGraph(event.target.text)} />
    </div>
  );
}

export default App;
