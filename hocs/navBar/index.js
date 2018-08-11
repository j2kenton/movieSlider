import React, { Component } from 'react';

export default function navBar(WrappedComponent) {
  return class extends Component {

    static displayName = `NavBar(${WrappedComponent.name})`;

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
