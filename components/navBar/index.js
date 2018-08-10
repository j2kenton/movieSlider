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
    // we need up to 5 items, with the current one in the middle
   /* const currentItem = list[props.index];
    const previousItems = list.slice(0, props.index);
    const nextItems = list.slice(props.index + 1, list.length);
    let nonCurrentItems = nextItems.concat(previousItems);
    let allItems = [currentItem];
    const itemsLength = nonCurrentItems.length;
    if (itemsLength > 0){
      allItems.unshift(nonCurrentItems[itemsLength - 1]);
      if (itemsLength > 1){
        allItems.push(nonCurrentItems[0]);
        if (itemsLength > 2){
          allItems.unshift(nonCurrentItems[itemsLength - 2]);
          if (itemsLength > 4){
            allItems.push(nonCurrentItems[1]);
          }
        }
      }
    }*/
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

      const translateValue = 0//(props.index) * -100;

      const styles = {
        transform: `translateX(${translateValue}%)`,
      };

      return (
        <div key={value.index} className={className} onClick={() => setIndex(value.index)} style={styles}>{value.name}</div>
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
