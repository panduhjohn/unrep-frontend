import React, { Component } from 'react';

export const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS_SIGNED_IN':
            return {
                ...state,
                isAuth: {
                    user: action.payload,
                    auth: true,
                },
            };
        case 'SUCCESS_SIGNED_OUT':
            return {
                ...state,
                isAuth: {
                    user: null,
                    auth: false,
                },
            };
        
        case 'ADD_TO_CART':
            return {
                ...state,

                cart: [...state.cart, action.payload],
            };

        default:
            return state;
    }
};

export class Provider extends Component {
    state = {
        isAuth: {
            user: null,
            auth: false,
        },
        cart: [],

        dispatch: (action) => {
            this.setState((state) => reducer(state, action));
        },
    };

    componentDidMount() {
        let getLocalStorage = localStorage.getItem('cart')
        let parsedLocalStorage = JSON.parse(getLocalStorage)
        console.log(parsedLocalStorage)

        this.setState({
            cart: parsedLocalStorage
        })
    }


    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
