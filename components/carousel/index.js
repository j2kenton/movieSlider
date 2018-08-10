import React from 'react';
import carousel from './../../hocs/carousel';
import Slide from './../slide';

const Carousel = ({ ...props }) => {

  const list = props.data;
  
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
    const newIndex = (props.index + increment + props.data.length) % props.data.length;
    setIndex(newIndex);
    clearTimer();
  };

  const triggerTimedIncrement = () => {
    clearTimer();
    // incrementTimer = setInterval(()=> incrementIndex(1), 1000);
  };
  triggerTimedIncrement();

  const renderSlides = (props) => {

    let list = props.data.slice();
    list.forEach(function(item, index){
      item.index = index;
    });

    return list.map((value) => {
      const isActive = value.index === props.index;
      const className = (isActive) ? "active" : "inactive";
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
