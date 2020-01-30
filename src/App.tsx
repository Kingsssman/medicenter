import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import useRoutes from "./routes";

const App: React.FC = () => {
  const routes = useRoutes(false);
  return (
    <Router>
      <div className='container'>
        <h1>{routes}</h1>
      </div>
    </Router>
  );
};

export default App;
