import React from "react";
import { CssBaseline } from "@material-ui/core";
import { Nav, Landing, Services, Skills, Footer, Projects } from "./components";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <CssBaseline />
        <Landing />
      </div>
    </ThemeProvider>
  );
};

export default App;
