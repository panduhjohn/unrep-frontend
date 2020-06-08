import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

export default class Navbar extends Component {

    componentDidMount() {
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
                <div>
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
                                    
                                    <Link to='/'>
                                        Witty <span>Name</span> Here
                                    </Link>
                                    {/* Ro<span>am</span>in */}
                                   
                                </h1>
                                <ul>
                                    <li>
                                        {/* <a href='/drinks'>Food & Drinks</a> */}
                                        <Link to='/drinks'>Food & Drinks</Link>
                                    </li>
                                    <li>
                                        <Link to='/contact'>Contact</Link>
                                    </li>
                                    <li>
                                        <Link to='/about'>About</Link>
                                    </li>
                                    <li>
                                        <Link to='/stuff'>Stuff</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </header>
                </div>
        );
    }
}
