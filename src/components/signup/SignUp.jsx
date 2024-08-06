import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="sign-up">
      <div className="container signup-container">
        <h1 className="sign-header">Sign Up</h1>
        <h4>Create Your Account to Get Started</h4>
        <form>
          <div className="form-group">
            <input type="text" placeholder="What is your name? *" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="What is your phone number?" />
            <input type="email" placeholder="What is your Email Id? *" />
          </div>
          <div className="form-group"> 
            <input type="text" placeholder="What is your Address? *" />
          </div>
          <button type="submit" className="signup-button">
            <Link to="/response" className="signup-link">SIGN UP</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
