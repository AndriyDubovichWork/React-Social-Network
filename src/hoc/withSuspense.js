import Preloader from 'components/common/preloader/preloader';
import React from 'react';

export const withSuspense = (Component) => {
  return (props) => {
    return (
      <React.Suspense fallback={Preloader}>
        <Component {...props} />
      </React.Suspense>
    );
  };
};
