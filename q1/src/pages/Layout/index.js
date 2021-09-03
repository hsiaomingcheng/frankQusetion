import React, { Suspense, useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from '../../components/Header';
import Home from '../Home';
import News from '../News';
import Login from '../Login';
import Register from '../Register';
import ErrorPage from '../ErrorPage';

function Layout() {
  return (
    <Router>
      <Header/>

      {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  )
}

export default Layout;