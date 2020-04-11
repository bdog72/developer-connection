//
//
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Users/login';

import Admin from './components/Users/Admin';

import MainLayout from './hoc/mainLayout';
import Auth from './hoc/auth';

const Routes = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route path="/admin" component={Auth(Admin)} />
          <Route path="/login" component={Auth(Login)} />
          <Route path="/" component={Home} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};

export default Routes;
