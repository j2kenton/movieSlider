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
      let orderValue = value.index;
      if (value.index < (props.index - 2)){
        orderValue += 1000;
      }
      if (value.index > (props.index + 2)){
        orderValue -= 1000;
      }
      const className = (isActive) ? "active" : "inactive";

      return (
        <div key={value.index} className={className} onClick={() => setIndex(value.index)} >{value.name}</div>
      )
    })
  };

  const windowWidth = window.innerWidth;
  const itemWidth = windowWidth / 5;
  const navShift = (itemWidth * props.index) + windowWidth;
  
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
