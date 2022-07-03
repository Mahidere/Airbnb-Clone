import { Box } from "@mui/system";
import { CssBaseline } from "@mui/material";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import OptionsTab from "./components/OptionsTab";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box>
          <Header />
          <OptionsTab />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default App;
