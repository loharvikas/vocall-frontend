import React from 'react';
import { Home, Dashboard, Iframe } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import * as ROUTES from './constant/routes'

function App() {
  return (
    // <Home />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/voices/iframe/:voiceId/' element={<Iframe />} />
        <Route path={ROUTES.DASHBOARD + '/*'} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
