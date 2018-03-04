import React from 'react';
import Categories from './Pages/Categories/Categories';
// import GameApp from './Pages/Game/GameApp';
import GameApp from './Pages/Game/GameApp';
import AppHome from './Pages/AppHome/AppHome';
import Login from './Pages/Login/Login';
import ScoreResults from './Pages/Score/Score';
import Signup from './Pages/Signup/Signup';
import GameTwo from './Pages/GameTwo/GameTwo'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/Game" component={GameApp} />
        <Route exact path="/gametwo" component={GameTwo} />
        <Route exact path="/" component={AppHome} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Categories" component={Categories} />
        <Route exact path="/Score" component={ScoreResults} />
      </Switch>
    </div>
  </Router>;

export default App;