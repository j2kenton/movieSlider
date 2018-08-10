import React, { Component } from 'react';
import Carousel from './components/carousel';
import NavBar from './components/navBar';

// import logo from './jones-logo.png';
import './App.css';

import dataSet from './moviesList.json'




class MovieSlider extends Component {

  constructor() {
    super();
    this.DATA = dataSet;
    this.state = {position: 0};
  }

  positionCallback = (newPosition) => {
    this.setState({position: newPosition})
  }

  render() {
    return (
      <div>
        <header></header>
        <Carousel data={this.DATA} index={this.state.position} onChange={this.positionCallback} />
        <NavBar data={this.DATA} index={this.state.position}  onChange={this.positionCallback} />
      </div>
    )
  }
}

export default function App() {
  return (
    <div id="wrapper">
      <MovieSlider/>
    </div>
  )
}
