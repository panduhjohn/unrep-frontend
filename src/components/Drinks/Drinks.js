import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import './Drinks.css'

export default class Drinks extends Component {
    render() {
        return (
            <div className='drinkContainer'>
                <h1>Heres the drinks!!</h1>
                <div className='cardContainer'>
                    <CardDeck>
                        <Card>
                            <Card.Img variant='top' src='/images/drink1.jpg' />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className='text-muted'>
                                    Last updated 3 mins ago
                                </small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant='top' src='/images/drink2.jpg' />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a
                                    natural lead-in to additional content.{' '}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className='text-muted'>
                                    Last updated 3 mins ago
                                </small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant='top' src='/images/drink3.jpg' />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This card has even longer content
                                    than the first to show that equal height
                                    action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className='text-muted'>
                                    Last updated 3 mins ago
                                </small>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                </div>
            </div>
        );
    }
}
