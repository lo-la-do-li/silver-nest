import React, { useState, useEffect} from 'react';
import FindARoommate from '../FindARoommate/FindARoommate'
import './App.css';
import NavBar from '../NavBar/NavBar';
import About from '../About/About';
import { Route, Switch, Redirect } from 'react-router-dom';
import Box from '@material-ui/core/Box';
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
      {/* <Box component="span" display='flex' justifyContent="space-between" flexDirection="row" padding={1} m={1}>
        <img className="App-logo" src={turingSHSLogo} alt='Turing School of Health Sciences'/>
        <h1>Silver Nest</h1>
        <img className="App-logo" src={turingSHSLogo} alt='Turing School of Health Sciences'/>
      </Box> */}
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
