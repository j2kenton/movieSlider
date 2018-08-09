import React from 'react';
import arrow from './../../hocs/arrow';

const Arrow = ({ ...props }) => {

  const incrementIndex = (index) => {
    props.onChange(index);
  };

  const symbol = (props.direction === "right") ? ">" : "<";
  
  const increment = (props.direction === "right") ? 1 : -1;

  return (
    <div className={`arrow ${props.direction}`} onClick={() => incrementIndex(increment)} >
      <i>{symbol}</i>
    </div>
  );
};

Arrow.contextTypes = {
  // hasErrors: PropTypes.bool
};

export default arrow(Arrow);
