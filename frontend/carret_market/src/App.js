import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Headers from './Component/Headers';
import Marketplace from './Component/Marketplace';
import NeighborhoodMarket from './Component/NeighborhoodMarket';
import Login from './Component/Login';
import Register from './Component/Register';
import PrivateRoutes from './Component/PrivateRoutes';
import ToastContainer from './Component/Toast';
import Counter from './Component/Counter';
import CounterContainers from './Containers/CounterContainers';

function App() {
  return (
    <Router>      
      <Headers />
      <Routes>        
        <Route path="/" element={<Marketplace />} />
        <Route path="/neighborhoodMarket" element={<NeighborhoodMarket />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />        
        {/* 접근제한 라우터 막기 */}
        {/* <Route element={<PrivateRoutes />}>
          <Route path="/neighborhoodMarket" element={<NeighborhoodMarket />} />
        </Route> */}
        <Route path="/counter" element={<Counter />} />          
        <Route path="/counter2" element={<CounterContainers />} />   
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;