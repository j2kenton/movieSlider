import React from 'react';
import PropTypes from 'prop-types';
import navBar from './../../hocs/navBar';

const NavBar = ({ hasErrors, ...props }) => {
  const list = [
    {
      "name": "Lethal Weapon",
      "imageUrl": "http://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2018/01/lethal-weapon-rankings.jpg?itok=3kt-664L",
      "release": "out now"
    }, {
      "name": "Mr Bean",
      "imageUrl": "",
      "release": "out now"
    }, {
    "name": "The Matrix",
    "imageUrl": "",
    "release": "out now"
  }, {
    "name": "Ocean's Eleven",
    "imageUrl": "",
    "release": "out now"
  }
  ];

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
