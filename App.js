import React, { Component } from 'react';
import Carousel from './components/carousel';
import NavBar from './components/navBar';
import './App.css';
import axios from 'axios';

const API = "./";
const DEFAULT_QUERY = "moviesList.json";

class MovieSlider extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: false,
      error: null,
      position: 0,
      moving: false,
      data: []
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios.get(API + DEFAULT_QUERY)
      .then(result => this.setState({
        data: result.data,
        isLoading: false
      }))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
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
    if (!this.state.isLoading && (typeof this.state.data === "object") && (this.state.data.length > 0)) {
      return (
        <div>
          <Carousel
            data={this.state.data}
            index={this.state.position}
            moving={this.state.moving}
            onChange={this.positionCallback}
            onStop={this.movementCallback}
          />
          <NavBar
            data={this.state.data}
            index={this.state.position}
            moving={this.state.moving}
            onChange={this.positionCallback}
            onStop={this.movementCallback}
          />
        </div>
      )
    } else {
      return null;
    }
  }

}

export default function App() {
  return (
    <div id="wrapper">
      <MovieSlider/>
    </div>
  )
}
