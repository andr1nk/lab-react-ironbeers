import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home"
import Beers from "./components/Beers"
import RandomBeer from "./components/RandomBeer"
import NewBeer from "./components/NewBeer"
import BeerDetail from './components/BeerDetail';


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/beers" component={Beers} />
      <Route exact path="/beers/:id" component={BeerDetail} />
      <Route exact path="/random-beer" component={RandomBeer} />
      <Route exact path="/new-beer" component={NewBeer} />
    </div>
  );
}

export default App;
