import React from 'react';
import Categories from './Pages/Categories';
// import GameApp from './Pages/Game/GameApp';
import AppHome from './Pages/AppHome';
import Login from './Pages/Login';
import ScoreResults from './Pages/Score';
import Signup from './Pages/Signup';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/Home" component={AppHome} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Categories" component={Categories} />
        <Route exact path="/Score" component={ScoreResults} />
      </Switch>
    </div>
  </Router>;

export default App;

        {/* <Route exact path="/" component={GameApp} /> */}