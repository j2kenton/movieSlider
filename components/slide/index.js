import React from 'react';
import slide from './../../hocs/slide';

import DetailsSection from './../detailsSection';
import Arrow from './../arrow';

const Slide = ({ ...props }) => {
  
  const FULL_SHIFT_LEFT = -100;
  const TRANSITION_DURATION = "900ms";

  const incrementIndex = (increment) => {
    props.onChange(increment);
  };

  const translateValue = (props.overallIndex) * FULL_SHIFT_LEFT;

  const styles = {
    backgroundImage: `url(${props.properties.imageUrl})`,
    transform: `translateX(${translateValue}%)`,
    transitionDuration: TRANSITION_DURATION
  };

  return (
    <div className="slide" style={styles} onMouseEnter={props.mouseEnterHandler} onMouseLeave={props.mouseLeaveHandler} >
      <DetailsSection properties={props.properties} />
      <Arrow direction="left" onChange={incrementIndex} />
      <Arrow direction="right" onChange={incrementIndex} />
    </div>
  );
};

Slide.contextTypes = {
};

export default slide(Slide);
