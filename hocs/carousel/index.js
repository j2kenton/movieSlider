import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function carousel(WrappedComponent) {
  return class extends Component {
    static contextTypes = {
      _errors: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string]))
    };

    static displayName = `Carousel(${WrappedComponent.name})`;

    shouldComponentUpdate(nextProps, nextState, nextContext) {
      const isIndexValid = Number.isInteger(nextProps.index) && (nextProps.index > -1) && (nextProps.index < this.props.data.length);
      const isIndexChanged = (this.props.index !== nextProps.index);
      return isIndexValid && isIndexChanged;
    }

    render() {

      return (
        <WrappedComponent {...this.props} />
      );
    }
  };
}
