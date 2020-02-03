import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'

export const Navbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    auth.logout();
    history.push('/')
  };

  return (
    <nav>
      <div className="nav-wrapper blue darken-1" style={{padding: '0 2rem'}}>
        <span className="brand-logo">Medicenter</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/" onClick={logoutHandler}>Logout</a></li>
        </ul>
      </div>
    </nav>
  )
};