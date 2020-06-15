import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../Context/Context';
import { logout } from '../Helpers/AuthHelpers';
import './Navbar.css';

class AuthNavLinks extends Component {
    static contextType = Context;

    logout = async () => {
        try {
            await logout();

            this.context.dispatch({
                type: 'SUCCESS_SIGNED_OUT',
            });
        } catch (e) {
            console.log(e);
        }
    };

    render() {
        return (
            <ul className='nav__ul'>
                <li>
                    <NavLink
                        to='/cocktails'
                        id='nav-links'
                        activeclassname='selected'
                    >
                        Cocktails
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/beers'
                        id='nav-links'
                        activeclassname='selected'
                    >
                        Beers
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/'
                        id='nav-links'
                        activeStyle={{ fontWeight: 'bold' }}
                        activeClassName='selected'
                        onClick={this.logout}
                    >
                        Logout
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/cart'
                        id='nav-links'
                        activeStyle={{ fontWeight: 'bold' }}
                        activeClassName='selected'
                    >
                        <span id='userProfile'>Cart</span>
                    </NavLink>
                </li>
            </ul>
        );
    }
}
export default AuthNavLinks;
