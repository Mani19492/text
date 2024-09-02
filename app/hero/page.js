import React from 'react';
import './hero.css';


const Hero = () => {
  return (
    <div>
      <section className="home" id="home">
        <video autoPlay muted loop className="bg-video">
          <source src="bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="home-content">
          <h1>hackathon</h1>
          <h3>"Hack. Create. Innovate."</h3>
          <p>
            Unleash your creativity at our intense, 48-hour hackathon where tech
            enthusiasts, developers, and designers come together to build
            innovative software solutions. Collaborate, compete, and showcase
            your skills in a dynamic and fun environment. Whether you're a
            seasoned coder or just starting out, there's a place for you to make
            an impact and bring your ideas to life. Get ready for exciting
            challenges, networking opportunities, and awesome prizes!
          </p>
          <a href="#register" className="btn">Register</a>
        </div>

        <div className="home-img">
          <div className="rhombus">
            <img 
              src="Screenshot_2024-08-24_172031-transformed-removebg-preview.png" 
              alt="Hackathon logo"
            />
          </div>
        </div>

        <div className="rhombus2"></div>
      </section>
    </div>
  );
}

export default Hero;
