import React, { Component } from 'react';
import Carousel from './components/carousel';
import NavBar from './components/navBar';
// import Input from './components/input';
// import Button from './components/button';

import logo from './jones-logo.png';
import './App.css';
















import axios from 'axios'

class Registration extends Component {

  constructor(API_URL) {
    super();
    this.API_URL = "http://localhost:3333/";
    this.REGISTRATION_MESSAGE = "Thank you for registering!";
    this.NO_RESPONSE_MESSAGE = "(No server response but apparently registration was successful).";
    this.FORM_SELECTOR = "#registrationForm";
    this.FORM_SERIALIZER = require("form-serialize");
  }

  // handleClick = () => {
  //     this.form.validateAll();
  // };
  //
  // handleSubmit = (event) => {
  //     event.preventDefault();
  //     const registrationForm = document.querySelector(this.FORM_SELECTOR);
  //     const inputData = this.FORM_SERIALIZER(registrationForm, {hash: true});
  //     const paramsStr = "?email=" + inputData.email + "&firstName=" + inputData.firstname + "&lastName=" + inputData.lastname + "&phoneNumber=" + inputData.phoneNumber;
  //     axios.get(this.API_URL + paramsStr)
  //         .then(response => {
  //             document.write(this.REGISTRATION_MESSAGE);
  //         }, reason => {
  //             document.write(this.REGISTRATION_MESSAGE + " " + this.NO_RESPONSE_MESSAGE);
  //         });
  // };

  render() {
    return (
      <div>
        <header></header>
        <Carousel></Carousel>
        <NavBar></NavBar>
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
