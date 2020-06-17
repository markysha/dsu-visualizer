import React from "react";

import Dashboard from "../../components/DashBoard";

function withDashboard(BaseComponent) {
  function Component(props) {
    return (
      <Dashboard>
        <BaseComponent {...props} />
      </Dashboard>
    );
  }

  return Component;
}

export default withDashboard;
