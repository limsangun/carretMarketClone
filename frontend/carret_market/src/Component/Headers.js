import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../App.css';

function Headers() {

  const location = useLocation();
  const isLoggedIn = localStorage.getItem('accessToken') && localStorage.getItem('refreshToken');

  const handleLogout = () => {
    // 로그아웃 처리
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
           <NavLink exact="true" to="/"><img style={{width:'130px'}} alt="당근마켓" src='https://dnvefa72aowie.cloudfront.net/karrot-cs/etc/202007/0cf1d10235c37b2635c02719125da37cc1bd632518198b1e1da7f5a364156540.png'></img></NavLink>
          </li>
          <li>
            <NavLink exact="true" to="/" className={location.pathname === '/' ? 'activeLink' : ''} style={{lineHeight:'2.32'}}>중고거래</NavLink>
          </li>
          <li>
            <NavLink exact="true" to="/neighborhoodMarket" className={location.pathname === '/neighborhoodMarket' ? 'activeLink' : ''} style={{lineHeight:'2.32'}}>동네가게</NavLink>
          </li>
          {isLoggedIn ? (<li>
            <NavLink exact to="/" onClick={handleLogout} style={{ lineHeight: '2.32' }}>로그아웃</NavLink>
          </li>) : (<li>
            <NavLink exact="true" to="/login" className={location.pathname === '/login' ? 'activeLink' : ''} style={{lineHeight:'2.32'}}>로그인</NavLink>
          </li>)}
          <li>
            <NavLink exact="true" to="/register" className={location.pathname === '/register' ? 'activeLink' : ''} style={{lineHeight:'2.32'}}>회원가입</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Headers;
