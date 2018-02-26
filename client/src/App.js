import React, { Component } from 'react';
import gameQuestions from './mockdata/gameQuestions';
import GameApp from './Pages/Game/GameApp';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Login" component={Login} />
      </Switch>
    </div>
  </Router>;

export default App;


        {/* <Route exact path="" component={Home} /> */}
        <Route exact path="" component={Login} />
        {/* <Route exact path="" component={Categories} /> */}
        {/* <Route exact path="/" component={GameApp} /> */}