import React from 'react';
import PropTypes from 'prop-types';
import detailsSection from './../../hocs/detailsSection';

const DetailsSection = ({ ...props }) => {


  const styles = {
    backgroundImage: `url(${props.properties.imageUrl})`
  }

  return (
    <div>
      <h2>{props.properties.name}</h2>
      <h3>{props.properties.release}</h3>
    </div>
  );
};

DetailsSection.contextTypes = {
  // hasErrors: PropTypes.bool
};

export default detailsSection(DetailsSection);
