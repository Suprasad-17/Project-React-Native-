// src/components/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Profile from './Profile';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </Router>
);

export default AppRouter;
