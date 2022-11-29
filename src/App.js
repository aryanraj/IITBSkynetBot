import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import {
  LoginScreen,
  ErrorScreen,
} from './screens';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={LoginScreen} />
        <Route component={ErrorScreen} />
      </Switch>
    </Router>
  );
}

export default App;
