import React from 'react';
import carousel from './../../hocs/carousel';
import Slide from './../slide';

const Carousel = ({ ...props }) => {

  const list = props.data;


  const renderSlides = (props) => {

    let list = props.data.slice();
    list.forEach(function(item, index){
      item.index = index;
    });

    return list.map((value) => {
      const isActive = value.index === props.index;
      const className = (isActive) ? "active" : "inactive";
      return (
        <Slide key={value.index} properties={value} overallIndex={props.index} />
      )
    })
  };
  

/*
  const goToNextSlide = () => {
    // const { images, index, translateValue, setTranslateValue, setIndex } = this.props
    // const index = props.position;
    // const 
    // if(props.position === list.length - 1) {
    //   setTranslateValue(0)
    //   return setIndex(0)
    // }
    // setTranslateValue(translateValue - this.slideWidth())
    props.setIndex(props.position + 1)
  }
*/
/*

  const Slides = list.map((value, key) => {
    const isActive = key === props.index;
    const className = (isActive) ? "active" : "inactive";
    return (
      <Slide properties={value} className={className}></Slide>
    )
  });
*/

  return (
    <div {...props} className="carousel" >
      {
        renderSlides(props)
      }
    </div>
  );
};

Carousel.contextTypes = {
  // hasErrors: PropTypes.bool
};

export default carousel(Carousel);
