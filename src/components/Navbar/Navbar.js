import React, { Component } from 'react';
import { Consumer } from '../Context/Context';
import { NavLink } from 'react-router-dom';
import { isAuthenticated, setUserAuth } from '../Helpers/AuthHelpers';

import AuthNavLinks from './AuthNavLinks';
import UnAuthNavLinks from './UnAuthNavLinks';

import './Navbar.css';

export default class Navbar extends Component {
    componentDidMount() {
        let jwtToken = isAuthenticated();

        if (jwtToken) {
            //use this function to set the User
            setUserAuth(jwtToken, this.props.dispatch);
        }

        const open = document.getElementById('hamburger');
        let changeIcon = true;

        open.addEventListener('click', function () {
            const overlay = document.querySelector('.overlay');
            const nav = document.querySelector('nav');
            let icon = document.querySelector('.menu-toggle i');

            overlay.classList.toggle('menu-open');
            nav.classList.toggle('menu-open');

            if (changeIcon) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');

                changeIcon = false;
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                changeIcon = true;
            }
        });
    }

    render() {
        return (
            <Consumer>
                {(stateOfContext) => {
                    const {
                        isAuth: { user, auth },
                    } = stateOfContext;
                    return (
                        <header>
                            <div className='menu-toggle' id='hamburger'>
                                <i
                                    id='skull'
                                    className='fas fa-skull-crossbones'
                                ></i>
                            </div>
                            <div className='overlay'></div>
                            <div className='container'>
                                <nav>
                                    <h1 className='brand'>
                                        <NavLink id='nav-links' to='/'>
                                            <span role='img' aria-label='drunk'>
                                                🥴
                                            </span>
                                            Sc<span>hwif</span>ty
                                            <span role='img' aria-label='puke'>
                                                🤮
                                            </span>
                                        </NavLink>
                                    </h1>
                                    {user && auth ? (
                                        <AuthNavLinks {...user} {...auth} />
                                    ) : (
                                        <UnAuthNavLinks />
                                    )}
                                </nav>
                            </div>
                           
                        </header>
                    );
                }}
            </Consumer>
        );
    }
}
