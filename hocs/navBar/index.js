import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function navBar(WrappedComponent) {
  return class extends Component {
    static contextTypes = {
      _errors: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string]))
    };

    static displayName = `NavBar(${WrappedComponent.name})`;

    shouldComponentUpdate(nextProps, nextState, nextContext) {
      return Number.isInteger(nextProps.index) && (nextProps.index > -1) && (nextProps.index < this.props.data.length) && (this.props.index !== nextProps.index);
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  };
}
