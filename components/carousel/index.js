import React from 'react';
import PropTypes from 'prop-types';
import carousel from './../../hocs/carousel';
import Slide from './../slide';
import axios from 'axios'

const Carousel = ({ ...props }) => {

  const list = props.data;
  
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
