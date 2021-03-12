import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from "@material-ui/core";
import { Nav, Landing, Skills, Footer, Projects, UnoTown, Yamuni, Kokkosaari } from "./components";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/Unotown" component={UnoTown} exact />
          <Route path="/Yamuni" component={Yamuni} exact />
          <Route path="/Kokkosaari" component={Kokkosaari} exact />
          <Route path="/Projects" component={Projects} exact />
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
