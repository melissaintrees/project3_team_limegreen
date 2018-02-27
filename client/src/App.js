import React, { Component } from 'react';
import Categories from './Pages/Categories/Categories';
import GameApp from './Pages/Game/GameApp';
import Login from './Pages/Login/Login';
import Score from './Pages/Score/Score';
import Signup from './Pages/Signup/Signup';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Categories" component={Categories} />
        <Route exact path="/Score" component={Score} />
      </Switch>
    </div>
  </Router>;

export default App;


        {/* <Route exact path="" component={Home} /> */}
        {/* <Route exact path="/" component={GameApp} /> */}