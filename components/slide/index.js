import React from 'react';
import slide from './../../hocs/slide';

import DetailsSection from './../detailsSection';


const Slide = ({ ...props }) => {

  const translateValue = (props.overallIndex) * -100;

  const styles = {
    backgroundImage: `url(${props.properties.imageUrl})`,
    // order: props.properties.index,
    transform: `translateX(${translateValue}%)`
  };

  return (
    <div className="slide" style={styles}>
      <DetailsSection  properties={props.properties} />
    </div>
  );
};

Slide.contextTypes = {
  // hasErrors: PropTypes.bool
};

export default slide(Slide);
