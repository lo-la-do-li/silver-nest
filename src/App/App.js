import React from "react";
import FindARoommate from "../FindARoommate/FindARoommate";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import About from "../About/About";
import AllResidents from "../AllResidents/AllResidents";
import { Route, Switch, Redirect } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#78909c",
    },
    secondary: {
      main: "#00acc1",
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <Switch>
          <Redirect exact path="/" to="/about" />
          <Route path="/about" component={About} />
          <Route path="/find-a-roommate" component={FindARoommate} />
          <Route path="/all-residents" component={AllResidents} />
        </Switch>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
