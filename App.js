import React, { Component } from 'react';
import Carousel from './components/carousel';
import NavBar from './components/navBar';

import logo from './jones-logo.png';
import './App.css';
import axios from 'axios'

import dataSet from './moviesList.json'


class Registration extends Component {

  constructor(API_URL) {
    super();
    this.DATA = dataSet;
  }
  render() {
    return (
      <div>
        <header></header>
        <Carousel data={this.DATA} />
        <NavBar data={this.DATA} />
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
