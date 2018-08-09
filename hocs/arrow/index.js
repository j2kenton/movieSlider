 import React, { Component } from 'react';

export default function arrow(WrappedComponent) {
  return class extends Component {
    static contextTypes = {
      // _errors: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string]))
    };

    static displayName = `Arrow(${WrappedComponent.name})`;

    shouldComponentUpdate(nextProps, nextState, nextContext) {
      return true;
    }

    render() {
      // const hasErrors = !!Object.keys(this.context._errors).length;

      return (
        <WrappedComponent {...this.props} />
      );
    }
  };
}
