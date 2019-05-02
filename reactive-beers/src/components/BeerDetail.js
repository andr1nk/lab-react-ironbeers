import React, { Component } from 'react';
import axios from "axios";
import NavBar from "./NavBar"

export default class BeerDetail extends Component {

  state = {
    beer: []
  }

  
  componentDidMount() {
    const beerId = this.props.match.params
    axios.get(`https://ironbeerapi.herokuapp.com/beers/single/${beerId.id}`).then(response => {
      this.setState({
        beer: response.data
      });
    });
  }

  render() {
    console.log(this.state.beer)
    const {image_url, name, tagline, first_brewed, attenuation_level, description} = this.state.beer
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
