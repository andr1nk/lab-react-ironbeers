import React from 'react'
import {Link} from "react-router-dom"

export default function BeerCard(props) {

  const beerCardStyle = {
    "display": "flex",
    "height": "20vh",
    "borderBottom": "1px solid grey",
    "padding": "20px 10vw"
  }

  const imgStyle = {
    "height": "100%",
    "marginRight": "20px"
  }

  return (
    <React.Fragment>
      {props.beer.map((beer) => {
        console.log(beer)
        return (
          <Link style={{"textDecoration": "none"}} to ={"/beers/" + beer._id} details={beer} >
            <div style={beerCardStyle} key={beer._id}>
              <img src={beer.image_url} style={imgStyle} />
              <div style={{ "textAlign": "left" }}>
                <h2>{beer.name}</h2>
                <h3>{beer.tagline} </h3>
                <p>id: {beer._id}</p>
              </div>
            </div>
          </Link>
        )
      })}
    </React.Fragment>
  )
}
