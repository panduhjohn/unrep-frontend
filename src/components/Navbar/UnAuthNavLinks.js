import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function UnAuthNavLinks() {
    return (
        <ul className='nav__ul'>
            <li>
                <NavLink
                    to='/about'
                    id='nav-links'
                    activeStyle={{ fontWeight: 'bold' }}
                    activeClassName='selected'
                >
                    About
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/contact'
                    id='nav-links'
                    activeStyle={{ fontWeight: 'bold' }}
                    activeClassName='selected'
                >
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/register'
                    id='nav-links'
                    activeStyle={{ fontWeight: 'bold' }}
                    activeClassName='selected'
                >
                    Register
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/login'
                    id='nav-links'
                    activeStyle={{ fontWeight: 'bold' }}
                    activeClassName='selected'
                >
                    Login
                </NavLink>
            </li>
        </ul>
    );
}
