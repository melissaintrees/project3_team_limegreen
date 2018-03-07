import React from 'react';
import Categories from './Pages/Categories/Categories';
// import GameApp from './Pages/Game/GameApp';
import GameApp from './Pages/Game/GameApp';
import AppHome from './Pages/AppHome/AppHome';
import Login from './Pages/Login/Login';
import Score from './Pages/Score/Score';
import Signup from './Pages/Signup/Signup';
import Game from './Pages/Game/Game'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/game" component={GameApp} />
        <Route exact path="/" component={AppHome} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/score" component={Score} />
      </Switch>
    </div>
  </Router>;

export default App;