import React, { Fragment, ReactElement } from 'react';
import ErrorBoundary from 'ui/organisms/errorBoundary/ErrorBoundary';

interface Props {}

export const ErrorExample = () => {
  throw new Error('He is not a Hero');

  return <span>Error Example</span>;
};

export default function ErrorPage(): ReactElement {
  return (
    <div style={{ marginTop: '300px' }}>
      <ErrorBoundary>
        <ErrorExample />
      </ErrorBoundary>
    </div>
  );
}
