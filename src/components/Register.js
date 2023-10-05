import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault(); 

    const form = event.target;

    const newUser = {
      full_name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
      repeat_password: form.elements.repeat_password.value,
    };

    try {
      const response = await fetch('http://16.16.27.213:3002/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        console.log('User has been created');
        navigate('/signupsuccess');
      } else {
        const errorData = await response.json(); 
        console.error('Error creating user:', errorData.error);
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div>
      <div className="page-ath-wrap" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <div className="page-ath-content">
          <div className="page-ath-header">
            <a href="/#/register" className="page-ath-logo">
              <img src="assets/images/avatar8.png" srcSet="assets/images/avatar9.png 2x" alt="logo" style={{ width: '200px', height: 'auto' }} />
            </a>
          </div>
          <div className="page-ath-form">
            <h2 className="page-ath-heading">Sign up <small>Create New MUDA-KYC Account</small></h2>
            <form onSubmit={handleRegister}>
              <div className="input-item">
                <input type="text" name="name" placeholder="Your Name" className="input-bordered" />
              </div>
              <div className="input-item">
                <input type="text" name="email" placeholder="Your Email" className="input-bordered" />
              </div>
              <div className="input-item">
                <input type="password" name="password" placeholder="Password" className="input-bordered" />
              </div>
              <div className="input-item">
                <input type="password" name="repeat_password" placeholder="Repeat_Password" className="input-bordered" />
              </div>
              <div className="input-item text-left">
                <input className="input-checkbox input-checkbox-md" id="term-condition" type="checkbox" />
                <label htmlFor="term-condition">I agree to MUDA KYC’s <a href="/#/policy">Privacy Policy</a> &amp;</label>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Create Account</button>
            </form>
            <ul className="row guttar-20px guttar-vr-20px">
            </ul>
            <div className="gaps-2x"></div>
            <div className="gaps-2x"></div>
            <div className="form-note">
              Already have an account? <Link to="/"> <strong>Sign in instead</strong></Link>
            </div>
          </div>
          <div className="page-ath-footer">
            <ul className="footer-links">
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
