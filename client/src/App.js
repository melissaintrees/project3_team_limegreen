import React, { Component } from 'react';
import gameQuestions from './mockdata/gameQuestions';
import GameApp from './Components/GameApp';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={GameApp} />
      </Switch>
    </div>
  </Router>;

export default App;
