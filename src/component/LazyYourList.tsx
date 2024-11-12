import React, { lazy, Suspense } from 'react';

const YourList = lazy(() => import('./YourList'));

const LazyYourList = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <YourList />
  </Suspense>
);

export { LazyYourList };
