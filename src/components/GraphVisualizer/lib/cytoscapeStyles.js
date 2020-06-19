export default {
  root: {
    layout: {
      name: 'breadthfirst',
      fit: true,
      // animate: true,
      // animationDuration: 500,
    },
    
    userZoomingEnabled: false,
    userPanningEnabled: false,
  },
  node: {
    'background-color': 'darkgrey',
    'label': 'data(id)',
    'shape': 'ellipse',
    'text-valign': 'center',
  },
  edge: {
    'width': 4,
    'line-color': '#ccc',
    'target-arrow-color': '#ccc',
    'target-arrow-shape': 'triangle',
    'label': 'data(weight)',
    'text-rotation': 'autorotate',
  },
  edge_active: {
    'line-color': '#98DC7B',
  },
  edge_added: {
    'line-color': '#000',
  },
  edge_skipped: {
    'line-color': '#ccc',
  }
};