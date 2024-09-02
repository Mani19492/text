import React from 'react';
import './nav.css';
 

const Nav = () => {
  return (
    <div>
      <header className="header">
        <a href="#" className="logo">logo</a>

        <nav className="navbar">
          <a href="#home" style={{ "--i": 1 }} className="active">Home</a>
          <a href="/about" style={{ "--i": 2 }}>About</a>
          <a href="#" id="teamLink" style={{ "--i": 3 }}>Team</a>
          <a href="#register" style={{ "--i": 4 }}>Register</a>
          <a href="/login" id="loginButton" style={{ "--i": 5 }}>Login</a>
        </nav>

        <div className="social-media">
          <a href="#" style={{ "--i": 1 }} aria-label="Instagram"><i className='bx bxl-instagram'></i></a>
          <a href="#" style={{ "--i": 2 }} aria-label="Twitter"><i className='bx bxl-twitter'></i></a>
          <a href="#" style={{ "--i": 3 }} aria-label="WhatsApp"><i className='bx bxl-whatsapp'></i></a>
        </div>
      </header>
    </div>
  );
}

export default Nav;
