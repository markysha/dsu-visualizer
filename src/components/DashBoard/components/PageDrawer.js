// App
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
// Components
// Blocks
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// Buttons
import IconButton from "@material-ui/core/IconButton";
// Icons
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import AssignmentIcon from "@material-ui/icons/Assignment";
// Decoration
import Divider from "@material-ui/core/Divider";

import all from "../../../lib/theme";

const useStyles = makeStyles(cur => {
  const theme = {...cur, ...all};

  return ({
  drawerPaper: {
    backgroundColor: theme.palette.dashboard.drawer.background,
    color: theme.palette.dashboard.drawer.text,
    position: "relative",
    whiteSpace: "nowrap",
    width: props => props.drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down("xs")]: {
      width: () => "100vw",
    },
  },
  drawerPaperClose: {
    overflowX: "hidden",
    width: () => "10px",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down("md")]: {
      width: () => theme.spacing(7),
    },
    [theme.breakpoints.down("xs")]: {
      width: () => "0px",
    },
  },
  toolbarIcon: {
    color: theme.palette.dashboard.drawer.icon,
    display: "block",
    alignItems: "center",
    position: "fixed",
    left: "1%",
    // justifyContent: "flex-end",
    padding: "0 0px",
    ...theme.mixins.toolbar,
  },
  rootListItemText: {
    whiteSpace: "pre-wrap",
    fontWeight: "100",
  },
  listIcon: {
    color: theme.palette.dashboard.drawer.icon,
  },
});});

function PageDrawer({ drawerWidth, open, handleDrawer }) {
  const classes = useStyles({drawerWidth });

  return (
    <Drawer
      variant="permanent"
      styles={{
        width: "100%"
      }}
      // classes={{
      //   paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      // }}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawer}>
          <ChevronLeftIcon classes={{ root: classes.listIcon }} />
        </IconButton>
      </div>
    </Drawer>
  );
}

PageDrawer.propTypes = {
  open: PropTypes.bool,
  drawerWidth: PropTypes.number,
  handleDrawer: PropTypes.func,
  nav: PropTypes.arrayOf(PropTypes.shape()),
};

PageDrawer.defaultProps = {
  drawerWidth: 240,
  open: true,
  handleDrawer: () => {},
  nav: [],
};

export default PageDrawer;
