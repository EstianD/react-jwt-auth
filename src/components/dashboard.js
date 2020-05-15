import React, { useContext } from "react";

// Material ui
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import AuthContext from "../hooks/AuthContext";

// Components
import Header from "./Header";

const dashboard = ({ user, handleLogout }) => {
  return (
    <AuthContext.Provider value={user}>
      <CssBaseline />
      <Container maxWidth="sm">
        <div>
          <Header handleLogout={handleLogout} />
        </div>
      </Container>
    </AuthContext.Provider>
  );
};

export default dashboard;
