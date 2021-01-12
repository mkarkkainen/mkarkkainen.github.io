import React from "react";
import { CssBaseline } from "@material-ui/core";
import { Nav, Landing, Skills, Footer, Projects } from "./components";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <CssBaseline />
        <Nav />
        <Landing />
      </div>
    </ThemeProvider>
  );
};

export default App;
