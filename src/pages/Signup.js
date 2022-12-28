import React from 'react';
import './styles/signup.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
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

      <div className="container">
        <div className="button-container">
          <button className="school__btn" onClick={() => navigate('/schreg')}>
            School
          </button>
          <button className="student__btn" onClick={() => navigate('/stureg')}>
           Student
          </button>
          <button className="bus__btn" onClick={() => navigate('/busreg')}>
            Bus Driver
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
