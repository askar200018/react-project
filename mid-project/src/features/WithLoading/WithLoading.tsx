import React, { Component } from 'react';
interface Props {
  isLoading: string;
}
function WithLoading(WrappedComponent: Component) {
  return function WihLoadingComponent({ isLoading, ...props }: Props) {
    if (!isLoading) return <Component {...props} />;
    return <p>Hold on, fetching data might take some time.</p>;
  };
}
export default WithLoading;
