import React from 'react';
import './App.css';
import HomeScreen from "./Screens/Home"
import CareerFairScreen from "./Screens/CareerFair"

import { BrowserRouter as Router, Route } from "react-router-dom";

const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/career-fair" exact component={CareerFairScreen} />
    </div>
  </Router>
);

export default AppRouter;