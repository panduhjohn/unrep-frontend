import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from './components/Context/Context';
import MainRouter from './MainRouter';
import Loading from './components/Loading/Loading';

import './App.css';

export default class App extends Component {
    render() {
        return (
            <Provider>
                <Router>
                    <React.Suspense fallback={<Loading />}>
                        <MainRouter />
                    </React.Suspense>
                </Router>
            </Provider>
        );
    }
}
