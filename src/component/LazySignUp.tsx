import React, { lazy, Suspense } from 'react';

const SignUp = lazy(() => import('./SignUp'));

const LazySignUp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <SignUp />
  </Suspense>
);

export { LazySignUp };
