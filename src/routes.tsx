import React from "react";
import {Route, Switch} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {AuthPage} from "./pages/AuthPage";
import {AdminPage} from "./pages/AdminPage";

const useRoutes = (isAuthentificated: boolean) => {
  if (isAuthentificated) {
    return (
      <Switch>
        <Route path='/admin' exact>
          <AdminPage/>
        </Route>
        <Route path='/' exact>
          <HomePage/>
        </Route>
      </Switch>
    )
  }

  return <Switch>
    <Route path='/'>
      <AuthPage/>
    </Route>
  </Switch>
};

export default useRoutes