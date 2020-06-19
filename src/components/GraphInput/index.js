import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.css';
import { setGraph } from '../../actions';
import { withStyles } from '@material-ui/core/styles';
import { Box, Input}  from '@material-ui/core';

const inlineStyles = {
  MuiInputRoot: {
    /* position: fixed;
    min-width: 20%;
    min-height: 50%;
    max-height: 50%; */
    
    maxWidth: "20vw",
    border: "1px solid black",
    borderRadius: "5px",
    boxSizing: "border-box",
    // minHeight: "40vh",
    maxHeight: "40vh",
    /* padding: 10px; */

    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
    /* justify-content: center; */
  },

  MuiInputInput: {
    /* max-height: 50%; */
    fontSize: "25px",
    /* display: flex; */
  }
};

function GraphInput({ classes, graph, setGraph }) {
  console.log(styles);
  return (
    <Box className={styles.Box}>
      <Input
        color="primary"
        value={graph}
        onChange={event => setGraph(event.target.value)}
        placeholder="Введите граф
Формат:
from to weight
Например 1 2 1"
        fullWidth
        multiline
        disableUnderline
        classes={{
          root: classes["MuiInputRoot"],
          multiline: classes["MuiInputInput"]
        }}
      />
    </Box>
  );
}

const mapStateToProps = state => ({
  graph: state.graph,
})

const mapDispatchToProps = dispatch => ({
  setGraph: graph => dispatch(setGraph(graph)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(inlineStyles)(GraphInput));
