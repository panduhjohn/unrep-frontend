import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./About.css";

export default class Restaurants extends Component {
  constructor() {
    super();
    this.state = {
      info: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/restaurants").then((results) => {
      console.log(results);
      this.setState({ info: results.data }, () => {
        console.log(this.state.info);
      });
    });
  }
  render() {
    return (
      <div className="drinkContainer">
        <h1>
          Co<span>ckta</span>ils
        </h1>
        <div className="cardContainer">
          <CardDeck>
            {this.state.info.map(({ name, thumb, location, cuisines }) => {
              return (
                <Card>
                  <Card.Img id="drinkImg" variant="top" src={thumb} />
                  <Card.Body>
                    <Card.Title id="drinkTitle">{name}</Card.Title>
                    <Card.Text>{location.address}</Card.Text>
                    <Card.Text>{cuisines}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button variant="info">Order Drink</Button>
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
