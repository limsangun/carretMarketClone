import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";

const isAuthenticated = () => {
  // 예시로 localStorage에 저장된 토큰을 사용하여 인증 여부를 판단
  const token = localStorage.getItem('token');
  return !!token; // 토큰이 존재하면 인증된 상태로 간주
};

const PrivateRoutes = () => {  
  
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
  };
  
  export default PrivateRoutes;