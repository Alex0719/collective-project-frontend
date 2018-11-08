import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from 'containers/elements/Layout';
import { routes } from './routesConfig';

const getRoutes = () =>
  routes.map(route => (
    <Route
      key={route.path}
      path={route.path}
      component={route.component}
      exact
    />
  ));
/* eslint-disable react/prefer-stateless-function */
export default class Root extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>{getRoutes()}</Switch>
      </div>
    );
  }
}
