import React from "react";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import MainRoutes from "./routes/MainRoutes";
import Header from "./AdminComponets/Header";

function AdminApp() {

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Header />
          <MainRoutes />
    </StyledEngineProvider>
  );
}

export default AdminApp;
