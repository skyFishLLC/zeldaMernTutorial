import React from 'react';

import './Navbar.css';
import logo from '../assets/triforce.png';
import { Link, useLocation } from 'react-router-dom';
import { scrollToTop } from '../util';

const Navbar = () => {
    const location = useLocation();
    const category_path = location.pathname;

  return (
    <div className='navbar-container'>
        <Link className='navbar-brand' to='/' onClick={scrollToTop}>
            <img src={logo} alt='triforce logo' className='navbar-logo' />
        </Link>
        <div className='navbar-link-list'>
            <div className='nav-item-box'>
                <div className='nav-triangle'></div>
                <Link 
                    className={`nav-link ${category_path === '/' ? "active-link" : ""}`}
                    to='/'
                >
                    BLOG
                </Link>
            </div>
            <div className='nav-item-box'>
                <div className='nav-triangle'></div>
                <Link 
                    className={`nav-link ${category_path === '/about' ? "active-link" : ""}`}
                    to='/about'
                >
                    ABOUT
                </Link>
            </div>
            <div className='nav-item-box'>
                <div className='nav-triangle'></div>
                <Link 
                    className={`nav-link ${category_path === '/admin' ? "active-link" : ""}`}
                    to='/admin'
                >
                    ADMIN
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Navbar