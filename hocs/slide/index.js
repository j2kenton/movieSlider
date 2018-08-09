import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function slide(WrappedComponent) {
  return class extends Component {
    static contextTypes = {
      _errors: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string]))
    };

    static displayName = `Slide(${WrappedComponent.name})`;

    shouldComponentUpdate(nextProps, nextState, nextContext) {
      return Number.isInteger(nextProps.overallIndex) && (nextProps.overallIndex > -1) && (this.props.overallIndex !== nextProps.overallIndex);
    }

    render() {
      // const hasErrors = !!Object.keys(this.context._errors).length;

      return (
        <WrappedComponent {...this.props} />
      );
    }
  };
}
