import React, { Component } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  link: string;
}
function WithLinkNext(WrappedComponent: Component) {
  return function WihLoadingComponent({ link, ...props }: Props) {
    return (
      <>
        <Component {...props} />
        <div>
          <Link to={`/rooms/${link}`}>Next</Link>
        </div>
      </>
    );
  };
}
export default WithLinkNext;
