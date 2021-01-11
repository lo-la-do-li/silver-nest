import React, { useState, useEffect} from 'react';
import FindARoommate from '../FindARoommate/FindARoommate'
import './App.css';
import NavBar from '../NavBar/NavBar';
import About from '../About/About';
import { Route, Switch, Redirect } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Thumbnails from '../Thumbnails/Thumbnails'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import turingSHSLogo from '../geometric-heart-logo.png'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#e6ffff',
      main: '#78909c',
      dark: '#82b3c9'
    },
    secondary: {
      light: '#b6ffff',
      main: '#00acc1',
      dark: '#4ba3c7'
    },
  },
});

function App() {
  return (
  <MuiThemeProvider theme={theme}>
    <div className="App">
      <NavBar/>
      <Switch>
        <Redirect exact path="/" to="/about" component={About}/>
        <Route path="/about" component={About}/>
        <Route path="/find-a-roommate" component={FindARoommate}/>
      </Switch>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
