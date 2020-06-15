import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import { Context } from '../Context/Context';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import faker from 'faker'

import BeersData from './BeersData';
import './Beers.css';

export default class Beers extends Component {
    static contextType = Context;

    orderDrink = ({ name, image, price }) => {
        this.context.dispatch({
            type: 'ADD_TO_CART',
            payload: {
                name,
                image,
                price,
            },
        });
        let getLocalStorage = localStorage.getItem('cart');

        let parsedLocalStorage = JSON.parse(getLocalStorage);

        parsedLocalStorage.push({
            name,
            image,
            price,
        });

        localStorage.setItem('cart', JSON.stringify(parsedLocalStorage));
        
        toast.success('🍻Beer Added', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    render() {
        return (
            <div className='drinkContainer'>
                <ToastContainer
                    position='top-center'
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <h1>
                    Bre<span>wsk</span>ies
                </h1>
                <div className='cardContainer'>
                    <CardDeck>
                        {BeersData.map(({ name, image, price }) => {
                            return (
                                <Card key={name}>
                                    <Card.Img
                                        id='drinkImg'
                                        variant='top'
                                        src={image}
                                    />
                                    <Card.Body>
                                        <Card.Title id='drinkTitle'>
                                            {name}
                                        </Card.Title>
                                        <Card.Text>Price: ${price}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Button
                                            variant='info'
                                            onClick={() =>
                                                this.orderDrink({
                                                    name,
                                                    price,
                                                    image,
                                                })
                                            }
                                        >
                                            Order Drink
                                        </Button>
                                    </Card.Footer>
                                </Card>
                            );
                        })}
                    </CardDeck>
                </div>
            </div>
        );
    }
}
