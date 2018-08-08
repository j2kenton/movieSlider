import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as SliderActions from './../../actions'
import axios from 'axios'


export default function carousel(WrappedComponent) {
  return class extends Component {
    static contextTypes = {
      _errors: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string]))
    };

    static displayName = `Carousel(${WrappedComponent.name})`;

    //
    // componentDidMount = async (dispatch) => {
    //     try {
    //       let res = await axios.get('/moviesList.json')
    //       console.log(res.data)
    //       this.props.list = res.data
    //       // dispatch(getImagesSuccess(res.data)) // res.data will be an [] of images
    //     }
    //     catch(e) {
    //       console.error('Fetching images failed: ' + e)
    //     }
    //   }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
      // return nextContext._errors !== this.context._errors;
    }

    render() {

      return (
        <WrappedComponent {...this.props} />
      );
    }
  };
}
