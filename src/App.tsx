import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CustomLayout } from './layout/CustomLayout';
import { routes } from './routes';
import { FirebaseProvider } from './firebaseprovider/FirebaseProvider';

const App = () => (
  <FirebaseProvider>
    <BrowserRouter basename="/StoryShelf">
      <CustomLayout>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path={routes.landing.path}
              element={<routes.landing.element />}
            />
            <Route
              path={routes.signIn.path}
              element={<routes.signIn.element />}
            />
            <Route
              path={routes.signUp.path}
              element={<routes.signUp.element />}
            />
            <Route
              path={routes.addBook.path}
              element={<routes.addBook.element />}
            />
            <Route
              path={routes.yourList.path}
              element={<routes.yourList.element />}
            />
            <Route
              path="*"
              element={<Navigate to={routes.landing.path} replace />}
            />
          </Routes>
        </React.Suspense>
      </CustomLayout>
    </BrowserRouter>
  </FirebaseProvider>
);

// eslint-disable-next-line import/no-default-export
export default App;
