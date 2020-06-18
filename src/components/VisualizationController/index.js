import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.css';
import { pushClick } from '../../actions';
import { LinearProgress, Box, List, Button }  from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { PlayArrow, Pause, NavigateBefore, NavigateNext, SkipPrevious, SkipNext } from '@material-ui/icons';

const inlineStyles = {
  List: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", 
  },
  
  LinearProgress: {
    backgroundColor: "grey",
    // opacity: "0.5",
    height: "3px",
    padding: "0px",
  },

  LinearProgress_Bar: {
    backgroundColor: "black",
  }
};

function VizualizationController({ classes, pushClick }) {
  return (
    <Box className={styles.Box}>
      <List className={classes.List}>
        <Button style={{minWidth:"0px"}} onClick={()=>pushClick("CONTROLLER_SKIP_PREVIOUS")}>
          <SkipPrevious/>
        </Button>
        <Button style={{minWidth:"0px"}} onClick={()=>pushClick("CONTROLLER_BEFORE")}>
          <NavigateBefore/>
        </Button>
        <Button style={{minWidth:"0px"}} onClick={()=>pushClick("CONTROLLER_PLAY")}>
          <PlayArrow/>
        </Button>
        <Button style={{minWidth:"0px"}} onClick={()=>pushClick("CONTROLLER_PAUSE")}>
          <Pause/>
        </Button>
        <Button style={{minWidth:"0px"}} onClick={()=>pushClick("CONTROLLER_NEXT")}>
          <NavigateNext/>
        </Button>
        <Button style={{minWidth:"0px"}} onClick={()=>pushClick("CONTROLLER_SKIP_NEXT")}>
          <SkipNext/>
        </Button>
      </List>
      <LinearProgress classes={{root: classes.LinearProgress, bar: classes.LinearProgress_Bar}} color="primary" variant="determinate" value={50} />
    </Box>
  );
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  pushClick: click => dispatch(pushClick(click)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(inlineStyles)(VizualizationController));
