import React from 'react';
import PropTypes from 'prop-types';
import carousel from './../../hocs/carousel';
import Slide from './../slide';
import axios from 'axios'

const Carousel = ({ ...props }) => {


  const list = [
    {
      "name": "Lethal Weapon",
      "imageUrl": "http://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2018/01/lethal-weapon-rankings.jpg?itok=3kt-664L",
      "release": "out now"
    }, {
      "name": "Mr Bean",
      "imageUrl": "",
      "release": "out now"
    }, {
      "name": "The Matrix",
      "imageUrl": "",
      "release": "out now"
    }, {
      "name": "Ocean's Eleven",
      "imageUrl": "",
      "release": "out now"
    }
  ];

  const renderSlides = () => (
    list.map((value, key) => <Slide properties={value} /> )
  )

  const Slides = list.map((value, key) => {
    return (
      <Slide properties={value}></Slide>
    )
  });

  return (
    <div {...props} className="carousel" >
      {
        renderSlides()
      }
    </div>
  );
};

Carousel.contextTypes = {
  hasErrors: PropTypes.bool
};

export default carousel(Carousel);
