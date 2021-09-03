import React, { Suspense, useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './assets/css/App.css';
import Home from './pages/Home';
import News from './pages/News';
import Login from './pages/Login';
import Register from './pages/Register';
import ErrorPage from './pages/ErrorPage';
import { getAuthentication } from './apis';

import Layout from './pages/Layout';

function App() {
  // 身分驗證
  // 在這支js做判斷公私有路由，Layout內包含私有路由
  const [auth, setAuth] = useState(true);

  // useEffect(() => {
  //   getAuthentication()
  //   .then(function(response) {
  //     console.log('response', response)
  //     return response.json();
  //   })
  //   .then(function(myJson) {
  //     setAuth(myJson.success)
  //     console.log('myJson', myJson);
  //   });
  // }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/news" component={News} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>

      {`${auth}`}
    </div>
  );
}

export default App;
