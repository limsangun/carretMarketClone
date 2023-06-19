import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Headers from './Component/Headers';
import Marketplace from './Component/Marketplace';
import NeighborhoodMarket from './Component/NeighborhoodMarket';
import Login from './Component/Login';
import Register from './Component/Register';

function App() {
  return (
    <Router>
      <Headers />
      <Routes>
        <Route path="/" element={<Marketplace />} />
        <Route path="/neighborhoodMarket" element={<NeighborhoodMarket />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;