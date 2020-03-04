import React from 'react';
import { routes } from 'routes';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import HomeView from "views/HomeView";

const Root = () => (
  <Router>
    <MainTemplate>
      <Switch>
        <Route exact path={ routes.home } component={ HomeView }/>
        <Route exact path={ routes.root } render={ () => <Redirect to={ routes.home }/> }/>
      </Switch>
    </MainTemplate>
  </Router>
);

export default Root;
