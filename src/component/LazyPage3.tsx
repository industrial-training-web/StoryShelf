import React, { lazy, Suspense } from 'react';

const AddBook = lazy(() => import('./AddBook'));

const Addbook = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <AddBook />
  </Suspense>
);

export { Addbook };
