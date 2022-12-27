import React from 'react';
import './styles/home.css';
import schoolImg from './school.png';
import { Link, useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <a href="/" id="navbar__logo"><i className="fas fa-bus"></i>eBUS</a>
          <div className="navbar__toggle" id="mobile-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div> 
          <ul className="navbar__menu">
            <li className="navbar__item">
              <a href="/" className="navbar__links">Home</a>
            </li>
            <li className="navbar__item">
              <a href="about" className="navbar__links">About</a>
            </li>
            <li className="navbar__item">
              <a href="support" className="navbar__links">Support</a>
            </li>
            <li className="navbar__btn">
              <a className="navbar__links" onClick={() => {navigate("/signup")}}>Login</a>
              </li>
          </ul>
        </div>
      </nav>

      <div className="main">
        <div className="main__container">
          <div className="main__content">
            <h1>Welcome To</h1>
            <h2>The New Age of Transportation</h2>
            <p>Schools ┃ Students ┃ Bus Drivers</p>
            <button className="main__btn"><a onClick={() => {navigate("/signup")}}>Get Started</a></button>
          </div>
          <div className="main__img--container">
            <img src={schoolImg} alt="pic" id="main__img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;