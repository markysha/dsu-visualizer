import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.css';
import { setGraph } from '../../actions';
import { Box, Input}  from '@material-ui/core';

function GraphInput({ graph, setGraph }) {
  console.log(styles);
  return (
    <Box className={styles.Box}>
      <Input
        color="primary"
        value={graph}
        onChange={event => setGraph(event.target.value)}
        placeholder="Введите граф"
        fullWidth
        multiline
        disableUnderline
        classes={{
          root: styles["MuiInput-root"],
          input: styles["MuiInput-input"]
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

export default connect(mapStateToProps, mapDispatchToProps)(GraphInput);
