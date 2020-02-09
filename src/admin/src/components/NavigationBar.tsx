import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const Navbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = (event:any) => {
    event.preventDefault();
    auth.logout();
    history.push('/');
  };

  return (
    <nav>
      <div className='nav-wrapper blue darken-1' style={{ padding: '0 2rem' }}>
        <span className='brand-logo'>Medicenter Admin Panel</span>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <NavLink to='/doctors'>Doctors</NavLink>
          </li>
          <li>
            <NavLink to='/services'>Services</NavLink>
          </li>
          <li>
            <a href='/' onClick={logoutHandler}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
