import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
// import faker from 'faker'

import BeersData from './BeersData';
import './Beers.css';

export default class Beers extends Component {
    render() {
        return (
            <div className='drinkContainer'>
                <h1>
                    Bre<span>wsk</span>ies
                </h1>
                <div className='cardContainer'>
                    <CardDeck>
                        {BeersData.map(({ name, image }) => {
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
                                        <Card.Text>
                                            Price: 
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Button variant='info'>
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
