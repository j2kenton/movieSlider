import React, { Component } from 'react';
import Carousel from './components/carousel';
import NavBar from './components/navBar';

import logo from './jones-logo.png';
import './App.css';
import axios from 'axios'

import dataSet from './moviesList.json'



class Registration extends Component {

  constructor() {
    super();
    this.DATA = dataSet;
    this.POSITION = 0;
    // this.state = {
    //   POSITION: 0
    // };
    // this.setState = (newState) => {
    //   this.state = newState;
    // }
    this.setPosition = (newPosition) => {
      this.POSITION = newPosition;
    }
  }

  positionCallback = (newPosition) => {
    // this.index = dataFromChild;
    this.setPosition(newPosition)
  }

  render() {
    return (
      <div>
        <header></header>
        <Carousel data={this.DATA} index={this.POSITION} setIndex={this.positionCallback} />
        <NavBar data={this.DATA} index={this.POSITION}  setIndex={this.positionCallback} />
      </div>
    )
  }
}

export default function App() {
  return (
    <div id="wrapper">
      <Registration/>
    </div>
  )
}
