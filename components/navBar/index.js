import React from 'react';
import PropTypes from 'prop-types';
import navBar from './../../hocs/navBar';

const NavBar = ({ hasErrors, ...props }) => {

  const list = props.data;


  const setIndex = (index) => {
    // const { images, index, translateValue, setTranslateValue, setIndex } = this.props
    // const index = props.position;
    // const
    // if(props.position === list.length - 1) {
    //   setTranslateValue(0)
    //   return setIndex(0)
    // }
    // setTranslateValue(translateValue - this.slideWidth())
    props.setIndex(index)
  }


  const navItems = list.map((value, key) => {

    const isActive = key === props.index;
    const className = (isActive) ? "active" : "inactive";

    return (
      <div className="navItem"  className={className} onClick={() => setIndex(key)}>{value.name}</div>
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
