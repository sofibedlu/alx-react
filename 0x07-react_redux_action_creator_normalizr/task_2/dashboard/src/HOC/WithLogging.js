import React, { Component } from 'react';

function WithLogging(WrappedComponent) {
  return class extends Component {
    static displayName = `WithLogging(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    componentDidMount() {
      console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name || 'Component'} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name || 'Component'} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default WithLogging;