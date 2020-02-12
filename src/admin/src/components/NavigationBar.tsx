import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

export const NavigationBar = () => {

  const Styles = styled.div`
    .navbar {
      background-color: #222;
    }
    a,
    .navbar-brand,
    .navbar-nav .nav-link {
      color: #bbb;
      &:hover {
        color: white;
      }
    }
  `;

  const history = useHistory();

  const auth = useContext(AuthContext);

  const logoutHandler = (event:any) => {
    event.preventDefault();
    auth.logout();
    history.push('/');
  };

  return (
    <Styles>
      <Navbar expand='lg'>
        <Navbar.Brand href='/'>Admin Panel</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Item>
              <Nav.Link>
                <Link to='/services'>Services</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to='/doctors'>Doctors</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to='/' onClick={logoutHandler}>
                  Logout
                </Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
    // <nav>  
    //   <div className='nav-wrapper blue darken-1' style={{ padding: '0 2rem' }}>
    //     <span className='brand-logo'>Medicenter Admin Panel</span>
    //     <ul id='nav-mobile' className='right hide-on-med-and-down'>
    //       <li>
    //         <NavLink to='/doctors'>Doctors</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to='/services'>Services</NavLink>
    //       </li>
    //       <li>
    //         <a href='/' onClick={logoutHandler}>
    //           Logout
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default NavigationBar;
