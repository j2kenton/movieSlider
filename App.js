import React, { Component } from 'react';
import Carousel from './components/carousel';
import NavBar from './components/navBar';
import './App.css';
import dataSet from './moviesList.json'

class MovieSlider extends Component {

  constructor() {
    super();
    this.data = dataSet;
    this.state = {
      position: 0,
      moving: false
    };
  }

  positionCallback = (newPosition) => {
    this.setState({
      position: newPosition,
      moving: true
    });
  };

  movementCallback = () => {
    this.setState({
      moving: false
    });
  };

  render() {
    return (
      <div>
        <Carousel
          data={this.data}
          index={this.state.position}
          moving={this.state.moving}
          onChange={this.positionCallback}
          onStop={this.movementCallback}
        />
        <NavBar
          data={this.data}
          index={this.state.position}
          moving={this.state.moving}
          onChange={this.positionCallback}
          onStop={this.movementCallback}
        />
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
