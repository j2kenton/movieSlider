import React, { Component } from 'react';

export default function navBar(WrappedComponent) {
  return class extends Component {

    constructor(props) {
      super(props);

      this.state = {
        moving: false,
      };
      
    }

    static displayName = `NavBar(${WrappedComponent.name})`;

    shouldComponentUpdate(nextProps, nextState, nextContext) {
      const isIndexValid = Number.isInteger(nextProps.index) && (nextProps.index > -1) && (nextProps.index < this.props.data.length);
      const isIndexChanged = (this.props.index !== nextProps.index);
      // eslint-disable-next-line
      const isMovingChanged = (this.props.moving != nextProps.moving); // changed in value, ignoring type
      return isIndexValid && (isIndexChanged || isMovingChanged);
    }

    render() {
      return (
        <WrappedComponent {...this.props} moving={this.props.moving} />
      );
    }
  };
}
