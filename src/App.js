import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Dashboard from './containers/Dashboard/Dashboard';

import './App.css';

//<Route path="/posts/:postId" component={}>
class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route path="/" component={Dashboard} />
        <Redirect to="/" />
      </Switch>
    )

    return (
      <div className="App">
        {routes}
      </div>
    );
  }
}

export default App;
