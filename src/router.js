import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import TestPage from './routes/testPage';
function RouterConfig({ history }) {
  console.log('history',history)
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/test" exact component={TestPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
