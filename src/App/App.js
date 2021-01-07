import React, { useState, useEffect} from 'react';
import './App.scss';
import NavBar from '../NavBar/NavBar';
import { Route, Switch } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import SingleLineGridList from '../Thumbnail/Thumbnail'

function App() {
  return (

    <div className="App">
      <Box component="span" m={1}>
        <header>
          <h1>Silver Nest</h1>
        </header>
      </Box>
      <NavBar />
      <Switch>
        <Route path="/about" />
        <Route path="/get-involved" component={SingleLineGridList}/>
      </Switch>
    </div>
  );
}

export default App;
