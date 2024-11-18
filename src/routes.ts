// src/routes.ts
import React from 'react';

// Lazy import with named exports
const LazyLanding = React.lazy(() =>
  import('./component/landing/LazyLanding').then((module) => ({
    default: module.LazyLanding,
  })),
);
const LazyPage2 = React.lazy(() =>
  import('./component/LazyPage2').then((module) => ({
    default: module.LazyPage2,
  })),
);
const LazyPage3 = React.lazy(() =>
  import('./component/LazyPage3').then((module) => ({
    default: module.LazyPage3,
  })),
);
const LazySignUp = React.lazy(() =>
  import('./component/LazySignUp').then((module) => ({
    default: module.LazySignUp,
  })),
);
const LazyYourList = React.lazy(() =>
  import('./component/LazyYourList').then((module) => ({
    default: module.LazyYourList,
  })),
);

export const routes = {
  landing: { path: '/landing', element: LazyLanding },
  signIn: { path: '/sign-in', element: LazyPage2 },
  signUp: { path: '/sign-up', element: LazySignUp },
  addBook: { path: '/add-book', element: LazyPage3 },
  yourList: { path: '/your-list', element: LazyYourList },
};
