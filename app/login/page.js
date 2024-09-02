'use client';
import React, { useState, useEffect } from 'react';
import './login.css';
import Image from 'next/image';
import gsap from 'gsap';

const Login = () => {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    if (showLogin) {
      gsap.fromTo(
        "#container",
        { scale: 0 },
        { scale: 1, duration: 0.4, ease: "sine.inOut" }
      );
    }
  }, [showLogin]);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseClick = () => {
    gsap.fromTo(
      "#container",
      { scale: 1 },
      { scale: 0, duration: 0.4, ease: "sine.inOut" }
    );
    gsap.to(
      "#login-button",
      { opacity: 1, duration: 0.8 }
    );
    setShowLogin(false);
  };

  return (
    <div>
      {showLogin ? (
        <div id="container">
          <h1>Log In</h1>
          <span className="close-btn" onClick={handleCloseClick}>
            <Image
              src="https://dqcgrsy5v35b9.cloudfront.net/cruiseplanner/assets/img/icons/login-w-icon.png"
              alt="Close"
              width={24}
              height={24}
            />
          </span>
          <form>
            <input type="email" name="email" placeholder="E-mail" />
            <input type="password" name="pass" placeholder="Password" />
            <a href="#">Log in</a>
            <div id="remember-container">
              <input type="checkbox" id="checkbox-2-1" className="checkbox" name="" />
              <span id="remember">Remember me</span>
              <span id="forgotten">Forgotten password</span>
            </div>
          </form>
        </div>
      ) : (
        <button id="login-button" onClick={handleLoginClick}>Show Login</button>
      )}
    </div>
  );
};

export default Login;
