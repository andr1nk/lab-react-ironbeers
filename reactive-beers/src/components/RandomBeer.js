import React, { Component } from 'react';
import axios from "axios";
import NavBar from "./NavBar";

export default class RandomBeer extends Component {

  state = {
    randomBeer: []
  }

  componentDidMount() {

    axios.get("https://ironbeerapi.herokuapp.com/beers/random").then(response => {
      this.setState({
        randomBeer: response.data
      });
    });
  }

  render() {

    const contentWrapper = {
      "display": "flex",
      "flexDirection": "column",
      "border": "1px solid red"
    }

    const {image_url, name, tagline, first_brewed, attenuation_level, description} = this.state.randomBeer

    return (
      <div>
        <NavBar />
        <img src={image_url} />
        <p>name: {name}</p>
        <p>tagline: {tagline}</p>
        <p>first_brewed: {first_brewed}</p>
        <p>attenuation_level: {attenuation_level}</p>
        <p>description: {description}</p>
      </div>
    )
  }
}
