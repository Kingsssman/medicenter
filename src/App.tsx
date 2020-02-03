import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import 'materialize-css'
import useRoutes from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from './context/AuthContext';

const App: React.FC = () => {
  const {token, login, logout, userId} = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <Router>
        <div className='container'>
          <h1>{routes}</h1>
        </div>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
