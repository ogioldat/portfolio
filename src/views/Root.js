import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import HomeView from "views/HomeView";

const Root = () => (
  <Router>
    <MainTemplate>
      <Switch>
        <Route exact path={ '/home' } component={ HomeView }/>
        <Route exact path={ '/' } render={ () => <Redirect to={ '/home' }/> }/>
      </Switch>
    </MainTemplate>
  </Router>
);

export default Root;
