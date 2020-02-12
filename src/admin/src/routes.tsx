import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthPage } from './pages/AuthPage';
import Doctors from './pages/Doctors';
import Services from './pages/Services';

export const useRoutes = (isAuthenticated:any) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path='/doctors' exact>
          <Doctors />
        </Route>
        <Route path='/services' exact>
          <Services />
        </Route>
        <Redirect to='/services' />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path='/' exact>
        <AuthPage />
      </Route>
      <Redirect to='/' />
    </Switch>
  );
};
