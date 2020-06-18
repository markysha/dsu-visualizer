import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.css';
import { pushClick } from '../../actions';
import { Box, List, Button }  from '@material-ui/core';
import { PlayArrow, Pause, NavigateBefore, NavigateNext, SkipPrevious, SkipNext } from '@material-ui/icons';

function VizualizationController({ pushClick }) {
  return (
    <Box className={styles.Box}>
      <List>
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
    </Box>
  );
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  pushClick: click => dispatch(pushClick(click)),
})

export default connect(mapStateToProps, mapDispatchToProps)(VizualizationController);
