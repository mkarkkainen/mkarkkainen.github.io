import React from "react";
import { CssBaseline } from '@material-ui/core';
import { Container } from "@material-ui/core";
import { Nav, Skills, Footer } from "./components";
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <CssBaseline />
          <Nav />
          <Skills />
          <Container />
          <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
