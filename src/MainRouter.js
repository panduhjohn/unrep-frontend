import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Consumer } from './components/Context/Context';

const Navbar = React.lazy(() => import('./components/Navbar/Navbar'));
const Home = React.lazy(() => import('./components/Home/Home'));
const Cocktails = React.lazy(() => import('./components/Cocktails/Cocktails'));
const Beers = React.lazy(() => import('./components/Beers/Beers'));
const About = React.lazy(() => import('./components/About/About'));
const Register = React.lazy(() => import('./components/Register/Register'));
const Login = React.lazy(() => import('./components/Login/Login'));

export default class MainRouter extends Component {
    render() {
        return (
            <Consumer>
                {({ dispatch }) => {
                    return (
                        <>
                            <Navbar dispatch={dispatch}/>

                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route
                                    exact
                                    path='/cocktails'
                                    component={Cocktails}
                                />
                                <Route
                                    exact
                                    path='/beers'
                                    component={Beers}
                                />
                                <Route exact path='/about' component={About} />
                                <Route
                                    exact
                                    path='/register'
                                    component={Register}
                                />
                                <Route
                                    exact
                                    path='/login'
                                    component={Login}
                                />
                                <Route
                                    render={() => {
                                        return <h1>Not Found</h1>;
                                    }}
                                />
                            </Switch>
                        </>
                    );
                }}
            </Consumer>
        );
    }
}
