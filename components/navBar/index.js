import React from 'react';
import navBar from './../../hocs/navBar';

const NavBar = ({ ...props }) => {

  const NUMBER_OF_ITEMS = 5;
  const TIMEOUT = 1000;

  const setIndex = (index) => {
    props.onChange(index);
    const timeoutId = setTimeout(function () {
      props.onStop();
    }, TIMEOUT);
  };

  const renderNavItems = (props) => {

    let list = props.data.slice();
    list.forEach(function(item, index){
      item.index = index;
    });
    let listWithDuplicates = list.concat(list, list);

    return listWithDuplicates.map((value) => {

      const isActive = value.index === props.index;
      let className = (isActive) ? "active" : "inactive";
      className += " navItem";

      return (
        <div key={value.index} className={className} onClick={() => setIndex(value.index)} >
          <span className="navText">{value.name}</span>
        </div>
      )

    })
  };

  // need to shift to central set of elements (so we have plenty of items on each side of us at all times)
  const windowWidth = window.innerWidth;
  const itemWidth = windowWidth / NUMBER_OF_ITEMS;
  // center by accounting for width of the (active and centered) item
  const shiftHalfItemWidth = (itemWidth / 2);
  // shift to correct position, so that active item is centered
  const shiftForEachItem = itemWidth * props.index;
  const navShift = shiftForEachItem + windowWidth + shiftHalfItemWidth;

  const duration = (props.moving) ? "900ms" : "0ms";
  
  const navStyles = {
    transform: `translateX(-${navShift}px)`,
    transitionDuration: duration
  };

  return (
    <nav style={navStyles} {...props} >
      { renderNavItems(props) }
    </nav>
  );
};

NavBar.contextTypes = {
};

export default navBar(NavBar);
