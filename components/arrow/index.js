import React from 'react';
import arrow from './../../hocs/arrow';

const Arrow = ({ ...props }) => {

  const SHIFT_INCREMENTS = {
    right: 1,
    left: 1
  };

  const SYMBOLS = {
    right: ">",
    left: "<"
  };

  const incrementIndex = (index) => {
    props.onChange(index);
  };

  const symbol = SYMBOLS[props.direction] || SYMBOLS.right;
  const increment = SHIFT_INCREMENTS[props.direction] || SHIFT_INCREMENTS.right;

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
