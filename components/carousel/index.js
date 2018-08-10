import React from 'react';
import carousel from './../../hocs/carousel';
import Slide from './../slide';

const Carousel = ({ ...props }) => {

  const SCROLL_INTERVAL = 10000;
  const SCROLL_INCREMENT = 1;

  const setIndex = (index) => {
    props.onChange(index);
  };

  let incrementTimer;

  const clearTimer = () => {
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
    incrementTimer = setInterval(()=> incrementIndex(SCROLL_INCREMENT), SCROLL_INTERVAL);
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
          mouseEnterHandler={clearTimer}
          mouseLeaveHandler={triggerTimedIncrement}
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
