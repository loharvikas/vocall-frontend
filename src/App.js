import React from 'react';
import { Home, Dashboard, Iframe, Login, Register } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoutes, IsRedirectUser } from './utils/routes';

import * as ROUTES from './constant/routes'

function App() {
  return (
    // <Home />
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <IsRedirectUser loggedInPath={ROUTES.REDIRECT}>
              <Home />
            </IsRedirectUser>
          } />
          <Route path='/login' element={
            <IsRedirectUser loggedInPath={ROUTES.REDIRECT}>
              <Login />
            </IsRedirectUser>
          } />
          <Route path='/register' element={
            <IsRedirectUser loggedInPath={ROUTES.REDIRECT}>
              <Register />
            </IsRedirectUser>
          } />
          <Route path='/voices/iframe/:voiceId/' element={<Iframe />} />
          <Route path={ROUTES.DASHBOARD + '/*'} element={
            <ProtectedRoutes redirectURL={ROUTES.LOGIN}>
              <Dashboard />
            </ProtectedRoutes>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
