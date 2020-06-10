import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

import CocktailsData from './CocktailsData';
import './Cocktails.css';

export default class Cocktails extends Component {
    render() {
        return (
            <div className='drinkContainer'>
                <h1>
                    Co<span>ckta</span>ils
                </h1>
                <div className='cardContainer'>
                    <CardDeck>
                        {CocktailsData.map(({ name, image }) => {
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
                                            Random words about random stuff.
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
