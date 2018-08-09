import React from 'react';
import slide from './../../hocs/slide';

import DetailsSection from './../detailsSection';


const Slide = ({ ...props }) => {


  const styles = {
    backgroundImage: `url(${props.properties.imageUrl})`
  }

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
