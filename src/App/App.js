import React, { useState, useEffect} from 'react';
import './App.scss';
import NavBar from '../NavBar/NavBar';
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Silver Nest</h1>
      </header>
      <NavBar />
      <Switch>
        <Route path="/about" />
        <Route path="/get-involved" />
      </Switch>
    </div>
  );
}

export default App;
