import React from 'react';
import navBar from './../../hocs/navBar';

const NavBar = ({ ...props }) => {

  const setIndex = (index) => {
    props.onChange(index);
  };

  const renderNavItems = (props) => {

    let list = props.data.slice();
    list.forEach(function(item, index){
      item.index = index;
    });
    let listWithDuplicates = list.concat(list, list);

    return listWithDuplicates.map((value) => {

      const isActive = value.index === props.index;
      const className = (isActive) ? "active" : "inactive";

      return (
        <div key={value.index} className={className} onClick={() => setIndex(value.index)} >
          <span className="navText">{value.name}</span>
        </div>
      )

    })
  };

  // need to shift to central set of elements (so we have plenty of items on each side of us at all times)
  const windowWidth = window.innerWidth;
  const itemWidth = windowWidth / 5;
  // center by accounting for width of the (active and centered) item
  const shiftHalfItemWidth = (itemWidth / 2);
  // shift to correct position, so that active item is centered
  const shiftForEachItem = itemWidth * props.index;
  const navShift = shiftForEachItem + windowWidth + shiftHalfItemWidth;

  const navStyles = {
    transform: `translateX(-${navShift}px)`,
  };

  return (
    <nav style={navStyles} {...props} >
      { renderNavItems(props) }
    </nav>
  );
};

NavBar.contextTypes = {
  // hasErrors: PropTypes.bool
};

export default navBar(NavBar);
