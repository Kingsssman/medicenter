import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {AuthPage} from "./pages/AuthPage";
import {AdminPage} from "./pages/AdminPage";

const useRoutes = (isAuthenticated: boolean) => {
  console.log(isAuthenticated);
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/admin" exact>
          <AdminPage/>
        </Route>
        <Redirect to="/"/>
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <HomePage/>
      </Route>
      <Route path="/auth" exact>
        <AuthPage/>
      </Route>
      <Redirect to="/"/>
    </Switch>
  )
};

export default useRoutes