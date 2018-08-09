import React from 'react';
import PropTypes from 'prop-types';
import navBar from './../../hocs/navBar';

const NavBar = ({ hasErrors, ...props }) => {

  const list = props.data;
  
  const navItems = list.map((value, key) => {
    return (
      <div className="navItem">{value.name}</div>
      )
  });

  return (
    <nav {...props} >
      { navItems }
    </nav>
  );
};

NavBar.contextTypes = {
  // hasErrors: PropTypes.bool
};

export default navBar(NavBar);
