import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
// Custom
// import PageAppBar from "./components/PageAppBar";
import PageDrawer from "./components/PageDrawer";
import PageContent from "./components/PageContent";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));

function Dashboard({ children, nav, drawerWidth }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(prevOpen => !prevOpen);
  };

  return (
    <div styles={{width: "100vw"}}>
      <PageDrawer
        handleDrawer={handleDrawer}
        nav={nav}
        drawerWidth={drawerWidth}
        open={open}
        styles={{
          width: "10%"
        }}
      />
      <PageContent>{children}</PageContent>
    </div>
  );
}

Dashboard.propTypes = {
  pageName: PropTypes.string,
  children: PropTypes.node,
  drawerWidth: PropTypes.number,
  nav: PropTypes.arrayOf(PropTypes.shape()),
  user: PropTypes.shape(),
  settings: PropTypes.shape(),
};

Dashboard.defaultProps = {
  pageName: "",
  drawerWidth: 240,
  children: [],
  user: { name: "" },
  nav: [],
  settings: {},
};

export default Dashboard;
