import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Home extends Component {

  render() {

    const containerStyle = {
      "display": "flex",
      "flexDirection": "column"
    }

    return (
      <div style={containerStyle}>
        <Link exact to="/beers">
          List all beers
          </Link>
        <Link exact to="/random-beer">
          get a random beer
          </Link>
        <Link exact to="/new-beer">
          Add a new beer
          </Link>
      </div>
    )
  }
}
