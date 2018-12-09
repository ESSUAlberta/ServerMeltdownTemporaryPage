import React from 'react';
import './App.css';
import HomeScreen from "./Screens/Home"
import CareerFairScreen from "./Screens/CareerFair"
import E404 from "./Screens/Errors/404"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        {false ? <Route path="/career-fair" exact component={CareerFairScreen} /> : null}
        <Route component={E404} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;