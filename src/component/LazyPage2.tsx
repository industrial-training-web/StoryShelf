import React, { lazy, Suspense } from 'react';

const Page2 = lazy(() => import('./SignIn'));

const LazyPage2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page2 />
  </Suspense>
);

export { LazyPage2 };
