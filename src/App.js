import React from "react";
import { CssBaseline } from '@material-ui/core';
import { Container } from "@material-ui/core";
import { Header, Skills } from "./components";
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <CssBaseline />
          <Header />
          <Skills />
          <Container />
      </div>
    </ThemeProvider>
  );
};

export default App;
