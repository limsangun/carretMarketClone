import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Headers from './Component/Headers';
import Marketplace from './Component/Marketplace';
import NeighborhoodMarket from './Component/NeighborhoodMarket';

function App() {
  return (
    <Router>
      <Headers />
      <Routes>
        <Route path="/" element={<Marketplace />} />
        <Route path="/neighborhoodMarket" element={<NeighborhoodMarket />} />
      </Routes>
    </Router>
  );
}

export default App;