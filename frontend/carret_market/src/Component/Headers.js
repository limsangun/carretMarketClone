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
            <NavLink exact to="/" activeClassName="active">홈</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">소개</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Headers;
