//
//
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Admin from './components/Users/Admin';

import Login from './components/Users/login';
import Logout from './components/Users/logout';

import MainLayout from './hoc/mainLayout';
import Auth from './hoc/auth';

const Routes = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route path="/admin" component={Auth(Admin, true)} />
          <Route path="/logout" component={Auth(Logout, true)} />
          <Route path="/login" component={Auth(Login, false)} />
          <Route path="/" component={Home} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};

export default Routes;
