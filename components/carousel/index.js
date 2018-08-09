import React from 'react';
import carousel from './../../hocs/carousel';
import Slide from './../slide';

const Carousel = ({ ...props }) => {

  const list = props.data;
  
  const renderSlides = () => (
    list.map((value, key) => <Slide properties={value} key={key} /> )
  )

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
        renderSlides()
      }
    </div>
  );
};

Carousel.contextTypes = {
  // hasErrors: PropTypes.bool
};

export default carousel(Carousel);
