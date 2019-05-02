import React, { Component } from 'react';
import axios from "axios";
import NavBar from "./NavBar";
import BeerCard from "./BeerCard"

export default class Beers extends Component {

  state = {
    beers: []
  }

  componentDidMount() {

    axios.get("https://ironbeerapi.herokuapp.com/beers/all").then(response => {
      this.setState({
        beers: response.data
      });
    });
  }


  render() {

    const contentWrapper = {
      "display": "flex",
      "flexDirection": "column",
      "border": "1px solid red"
    }

    return (
      <div>
        <NavBar />
        <div style={contentWrapper}>
          <BeerCard beer={this.state.beers} />
        </div>
      </div>
    )
  }
}
