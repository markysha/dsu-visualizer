import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.css';
import { pushClick } from '../../actions';
import { Box, List, Button }  from '@material-ui/core';
import { PlayArrow, Pause, NavigateBefore, NavigateNext } from '@material-ui/icons';

function VizualizationController() {
  return (
    <Box className={styles.Box}>
      <List>
        <Button onclick={()=>pushClick("CONTROLLER_BEFORE")}>
          <NavigateBefore/>
        </Button>
        <Button onclick={()=>pushClick("CONTROLLER_PLAY")}>
          <PlayArrow/>
        </Button>
        <Button onclick={()=>pushClick("CONTROLLER_PAUSE")}>
          <Pause/>
        </Button>
        <Button onclick={()=>pushClick("CONTROLLER_NEXT")}>
          <NavigateNext/>
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
