import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';

function Headers() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">당근마켓</NavLink>
          </li>
          <li>
            <NavLink exact to="/" activeClassName="active">중고거래</NavLink>
          </li>
          <li>
            <NavLink to="/neighborhoodMarket" activeClassName="active">동네가게</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Headers;
