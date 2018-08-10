import React from 'react';
import carousel from './../../hocs/carousel';
import Slide from './../slide';

const Carousel = ({ ...props }) => {

  const setIndex = (index) => {
    props.onChange(index);
  };

  let incrementTimer;

  const clearTimer = () => {
    clearInterval(incrementTimer);
  };

  const clearTimer2 = () => {
    clearInterval(incrementTimer);
  };

  const incrementIndex = (increment) => {
    const shiftForNegativeValues = props.data.length; // e.g. shift `-1` to `props.data.length - 1`
    const currentIndex = props.index;
    const newIndex = (currentIndex + increment + shiftForNegativeValues) % props.data.length;
    setIndex(newIndex);
    clearTimer();
  };

  const triggerTimedIncrement = () => {
    clearTimer();
    incrementTimer = setInterval(()=> incrementIndex(1), 10000);
  };
  triggerTimedIncrement();

  const renderSlides = (props) => {

    let list = props.data.slice();
    list.forEach(function(item, index){
      item.index = index;
    });

    return list.map((value) => {
      return (
        <Slide 
          key={value.index} 
          properties={value} 
          overallIndex={props.index} 
          onChange={incrementIndex} 
          onMouseOver={clearTimer2}
          onClick={clearTimer2}
        />
      )
    })
  };

  return (
    <div {...props} className="carousel" >
      {
        renderSlides(props)
      }
    </div>
  );
};

Carousel.contextTypes = {
  // hasErrors: PropTypes.bool
};

export default carousel(Carousel);
