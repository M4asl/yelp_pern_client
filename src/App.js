import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components

import Home from './pages/Home';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import UpdatePage from './pages/UpdatePage';
import { RestaurantsContextProvider } from './context/RestaurantsContext';

function App() {
  return (
    <>
      <RestaurantsContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route
              path="restaurants/:id"
              element={<RestaurantDetailPage />}
            />
            <Route
              path="restaurants/:id/update"
              element={<UpdatePage />}
            />
          </Routes>
        </BrowserRouter>
      </RestaurantsContextProvider>
    </>
  );
}

export default App;
