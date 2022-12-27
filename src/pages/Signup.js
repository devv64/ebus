import React from 'react';
import './styles/signup.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  return (
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
  );
}

export default Signup;
