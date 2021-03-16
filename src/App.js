import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from "@material-ui/core/CssBaseline";
import { Landing, Projects, UnoTown, Yamuni, Kokkosaari } from "./components";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/unotown" component={UnoTown} exact />
          <Route path="/yamuni" component={Yamuni} exact />
          <Route path="/kokkosaari" component={Kokkosaari} exact />
          <Route path="/projects" component={Projects} exact />
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
