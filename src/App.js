import { Box } from "@mui/system";
import { CssBaseline } from "@mui/material";
import "./App.css";
import React from "react";
import Header from "./components/Header";

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
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default App;
