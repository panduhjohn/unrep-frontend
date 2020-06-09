import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import axios from "axios";
import DrinksData from "./DrinksData";
import "./Drinks.css";

export default class Drinks extends Component {
  constructor() {
    super();
    this.state = {
      info: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/drinks").then((results) => {
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
            {DrinksData.map(({ name, image }) => {
              return (
                <Card>
                  <Card.Img id="drinkImg" variant="top" src={image} />
                  <Card.Body>
                    <Card.Title id="drinkTitle">{name}</Card.Title>
                    <Card.Text>Random words about random stuff.</Card.Text>
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
