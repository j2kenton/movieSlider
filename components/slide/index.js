import React from 'react';
import slide from './../../hocs/slide';

import DetailsSection from './../detailsSection';
import Arrow from './../arrow';

const Slide = ({ ...props }) => {

  const incrementIndex = (increment) => {
    props.onChange(increment);
  };

  const translateValue = (props.overallIndex) * -100;

  const styles = {
    backgroundImage: `url(${props.properties.imageUrl})`,
    transform: `translateX(${translateValue}%)`
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
  // hasErrors: PropTypes.bool
};

export default slide(Slide);
