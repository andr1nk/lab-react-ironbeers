import React, { Component } from 'react'
import axios from "axios"
import NavBar from "./NavBar"

export default class NewBeer extends Component {

  componentDidMount() {
    axios.post("https://ironbeerapi.herokuapp.com/beers/new").then(response => {
      console.log(response)
    });
  }

  render() {
  
    return (
      <div>
        <NavBar />
        <div>
          <form style={{ "display": "flex", "flexDirection": "column" }} >
            <label>name</label>
            <input
              type="text"
              name="name"
            />
            <label>tagline</label>
            <input
              type="text"
              name="tagline"
            />
            <label>description</label>
            <input
              type="text"
              name="description"
            />
            <label>first_brewed</label>
            <input
              type="text"
              name="first_brewed"
            />
            <label>brewers_tips</label>
            <input
              type="text"
              name="brewers_tips"
            />
            <label>attenuation_level</label>
            <input
              type="number"
              name="attenuation_level"
            />
            <label>contributed_by</label>
            <input
              type="text"
              name="contributed_by"
            />
            <input type="submit" value="Add" />
          </form>
        </div>
  
      </div>
    )
  }
}
