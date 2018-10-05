import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./render-comp/home";
import Results from "./render-comp/results";
import './App.css';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/results" component={Results} />
      </Switch>
    </div>
  </Router>
);

export default App;
