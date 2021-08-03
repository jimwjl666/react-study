import {
  BrowserRouter as Router, Route, Link, Switch,
} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import UserPage from '../pages/UserPage';
import LoginPage from '../pages/LoginPage';
import Page404 from '../pages/404Page';
import PrivateRoute from './PrivateRoute';
/*

import _404Page from "../pages/_404Page";
 */

export const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/user',
    component: UserPage,
    auth: PrivateRoute,
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    component: Page404,
  },
];

export default function Routes() {
  return (
    <Router>
      <Link to="/">首页</Link>
      <Link to="/user">用户中心</Link>
      <Link to="/login">登录</Link>

      <Switch>
        {/* <Route exact path="/" component={HomePage} />
        <PrivateRoute path="/user" component={UserPage} age="1" />
        <Route path="/login" component={LoginPage} />
        <Route component={Page404}/> */}
        {
          routes.map((routeItem) => (routeItem.auth
            ? (<routeItem.auth key={`${routeItem.path}route`} {...routeItem} />)
            : (<Route key={`${routeItem.path}route`} {...routeItem} />)))
        }
      </Switch>
    </Router>
  );
}
