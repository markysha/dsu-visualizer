// App
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
// Components
// Blocks
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    height: "100%",
    overflow: "auto",
  },
  // appBarSpacer: theme.mixins.toolbar,
  container: {
    // paddingTop: theme.spacing(4),
    // paddingBottom: theme.spacing(4),
  },
}));

function PageContent({ children }) {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="xl" className={classes.container}>
        {children}
      </Container>
    </main>
  );
}

PageContent.propTypes = {
  children: PropTypes.node,
};

PageContent.defaultProps = {
  children: [],
};

export default PageContent;
